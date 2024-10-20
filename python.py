import requests
import random
from bs4 import BeautifulSoup
from typing import Final
from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes

input = ""
raffleInfo = []
NewTicket = ["15244253","15244121"]
ticketNumber = [
    {"ticketNumber" : "15244231", "referenceNo" : "L3JYKK6JK3"},
    {"ticketNumber" : "15244232", "referenceNo" : "FKMAU4U791"}
]
token: Final = '8114567147:AAHSwe3aoqg-XQlRFq-VHjQ7A-D800YY_6M'
Bot_Username: Final = '@FunRafflesForAllBot'
headers = {
    "Host": "gw.dragonpay.ph",
    "Sec-Ch-Ua": '"Chromium";v="129", "Not=A?Brand";v="8"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Accept-Language": "en-US,en;q=0.9",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6668.71 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "Accept-Encoding": "gzip, deflate, br",
    "Priority": "u=0, i",
    "Connection": "keep-alive"
}

def generate_ticket_number():
    ticket_number = f"55{random.randint(100000, 999999)}"
    return ticket_number

async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('start')

async def announce_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if context.args[0] == "winner":
        message_text = f"Congratulations "
    message_text = ' '.join(context.args)
    await context.bot.send_message(chat_id='-1002400221832', text=message_text)

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('Help')

async def custom_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('custom command')

async def join_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    ticketNum = generate_ticket_number()
    NewTicket.append(ticketNum)
    await update.message.reply_text(f'Success!\n\nData has been saved\nTicket Number: {ticketNum}\n\nPlease generate the payment information for {context.args[0]} to enter the raffle with the saved details.\n\nGenerate a payment reference number using /generate_payment <ticket_number>')    

async def generate_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = ""
    input = context.args[0]
    if input != "":
         refno = ""
         for ticket in ticketNumber:
             if ticket['ticketNumber'] == input:
                refno = ticket['referenceNo']
         if refno != "":
            url = f"https://gw.dragonpay.ph/Bank/GetEmailInstruction.aspx?refno={refno}"
            
            response = requests.get(url, headers=headers)
            soup = BeautifulSoup(response.text, 'html.parser')
            status_div = soup.find("div", id="EmailInstructionAmount")
            status_text = status_div.get_text(separator=" ", strip=True)
            status = status_text.split("Status:")[-1].strip()
            if(status == 'PENDING'):
                biller_name = soup.find("td", string="Biller Name:").find_next("td").text.strip()
                amount = soup.find("td", string="Amount:").find_next("td").text.strip()
                deadline = soup.find("td", string="Deadline:").find_next("td").find("span").text.strip()
                payment_instruction_paragraph = soup.find("h2", string="Payment Instructions").find_next("p")
                if payment_instruction_paragraph:
                    for link in payment_instruction_paragraph.find_all('a'):
                        link_text = link.get_text()  
                        link.insert_before(link_text)
                        link.extract()  
                    payment_instruction = payment_instruction_paragraph.text.strip()
                text = f"Successfuly Generated Payment Information for Ticket Number: {context.args[0]}!\n\n{payment_instruction}\n\nBiller Name: {biller_name}\nAmount: {amount}\nDeadline: {deadline}\nPayment Status: {status}"
            else:
                text = f"Information!\n\nTicket Number {context.args[0]} has already entered the raffle."
         else:
            for new in NewTicket:
                if new == input:
                    text = f"The payment request generation for ticket {context.args[0]} is in confirmation process.\n\nPlease check back in a few minutes."
                    break
                text = f"Error!\n\nTicket Number {context.args[0]} is not found."
    else:
        text = f"Error!\n\nPlease Enter a Valid Ticket Number."
    await update.message.reply_text(text)

async def custom_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text('custom command')

async def event_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if context.args[0] == "help":
        text = "Commands:\n\n/update_raffle set <Item_Name> <Quantity> <Item Price> <Members to start> - sets the raffle event, this event is designed to start when the count of the members to start requirement is met. (Take note of the item name, the space should be replaced with underscore)\n/update_raffle clear - clears the raffle event. (emergency change or cancellation of event)"
    if context.args[0] == "set":
        raffleInfo.append(context.args[1])
        raffleInfo.append(context.args[2])
        raffleInfo.append(context.args[3])
        raffleInfo.append(context.args[4])
        text = "Raffle Updated"
    elif context.args[0] == "clear":
        raffleInfo.clear()
        text = "Raffle Updated"
    await update.message.reply_text(text)

async def raffle_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if len(raffleInfo) > 0:
        text = f"!Active Raffle Event!\n\nItem: {raffleInfo[0]}\nQuantity: {raffleInfo[1]}\nItem Price: {raffleInfo[2]}\nRequired Members Registered to Start: {raffleInfo[3]}"
    else:
        text = "There are no active raffles at the moment."
    await update.message.reply_text(text)

async def process_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if context.args[0] == "list":
        if len(NewTicket) > 0:
            text = ' '.join(NewTicket)
        else:
            text = "No new requests"
    elif context.args[0] == "register":
        NewTicket.remove(context.args[1])
        ticketNumber.append({"ticketNumber" : context.args[1], "referenceNo" : context.args[2]})
        text = f"Successfully registered {context.args[1]} with reference number: {context.args[2]}"
    elif context.args[0] == "help":
        text = "Commands:\n\n/process_ticket list - lists the ongoing new ticket registration.\n/process_ticket register <ticket number> <reference number> - Registers the ticket number for raffle event"
    await update.message.reply_text(text)

def handle_response(text: str) -> str:

        processed: str = text.lower()

        if 'test' in processed:
            return 'test'
        
        return 'unknown'
    

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    message_type: str = update.message.chat.type
    text: str = update.message.text

    print(f'User ({update.message.chat.id}) in {message_type}: "{text}"')

    if message_type == 'group':
        if Bot_Username in text:
            new_text: str = text.replace(Bot_Username, '').strip()
            response: str = handle_response(new_text)
        else:
             return
        
    else:
         response: str = handle_response(text)

    print('Bot:', response)
    await update.message.reply_text(response)

async def error(update: Update, context: ContextTypes.DEFAULT_TYPE):
    print(f'Update: {update} caused error {context.error}')


if __name__ == '__main__':
     app = Application.builder().token(token).build()

     #User Access Commands
     app.add_handler(CommandHandler('help', help_command))
     app.add_handler(CommandHandler('join_raffle', join_command))
     app.add_handler(CommandHandler('raffle_info', raffle_command))
     app.add_handler(CommandHandler('generate_payment', generate_command))
     
     
     #Owner Access Commands
     app.add_handler(CommandHandler('start', start_command))
     app.add_handler(CommandHandler('update_raffle', event_command))
     app.add_handler(CommandHandler('announce', announce_command))
     app.add_handler(CommandHandler('process_ticket', process_command))

     app.add_handler(MessageHandler(filters.TEXT, handle_message))

     app.add_error_handler(error)

    # check replies every poll interval
     app.run_polling(poll_interval=3)