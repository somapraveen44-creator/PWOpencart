# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: VStesting.ts >> vs
- Location: test\VStesting.ts:2:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\ranga\OneDrive\Desktop\praveen\PW\test\VStesting.ts-snapshots\gst-login-chromium-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e4]:
      - list [ref=e9]:
        - listitem [ref=e10] [cursor=pointer]:
          - link "Skip to Main Content" [ref=e11]:
            - /url: javascript:void(0)
        - listitem [ref=e12] [cursor=pointer]:
          - generic [ref=e13]: 
        - listitem [ref=e14] [cursor=pointer]:
          - text: A
          - superscript [ref=e15]: +
        - listitem [ref=e16] [cursor=pointer]:
          - text: A
          - superscript [ref=e17]: "-"
      - generic [ref=e20]:
        - link "Goods and Services Tax Home" [ref=e21] [cursor=pointer]:
          - /url: //www.gst.gov.in/
          - img "Goods and Services Tax Home" [ref=e22]
        - heading "Goods and Services Tax Government of India, States and Union Territories" [level=1] [ref=e23]:
          - link "Goods and Services Tax Government of India, States and Union Territories" [ref=e24] [cursor=pointer]:
            - /url: //www.gst.gov.in/
            - text: Goods and Services Tax
            - text: Government of India, States and Union Territories
        - list [ref=e25]:
          - listitem [ref=e26]:
            - link "Register" [ref=e27] [cursor=pointer]:
              - /url: //reg.gst.gov.in/registration
          - listitem [ref=e28]:
            - link "Login" [ref=e29] [cursor=pointer]:
              - /url: //services.gst.gov.in/services/login
    - navigation [ref=e31]:
      - list [ref=e34]:
        - listitem [ref=e35]:
          - link "Home" [ref=e36] [cursor=pointer]:
            - /url: //www.gst.gov.in/
        - listitem [ref=e37]:
          - button "Services" [ref=e38] [cursor=pointer]: Services
        - listitem [ref=e40]:
          - link "GST Law" [ref=e41] [cursor=pointer]:
            - /url: //services.gst.gov.in/services/gstlaw/gstlawlist
        - listitem [ref=e42]:
          - button "Downloads" [ref=e43] [cursor=pointer]: Downloads
        - listitem [ref=e45]:
          - button "Search Taxpayer" [ref=e46] [cursor=pointer]: Search Taxpayer
        - listitem [ref=e48]:
          - button "Help and Taxpayer Facilities" [ref=e49] [cursor=pointer]
        - listitem [ref=e50]:
          - link "e-Invoice" [ref=e51] [cursor=pointer]:
            - /url: //einvoice.gst.gov.in/einvoice/dashboard
        - listitem [ref=e52]:
          - link "News and Updates" [ref=e53] [cursor=pointer]:
            - /url: //services.gst.gov.in/services/advisory/advisoryandreleases
  - generic [ref=e58]:
    - list [ref=e62]:
      - listitem [ref=e63]:
        - link "Home" [ref=e64] [cursor=pointer]:
          - /url: //www.gst.gov.in/
      - listitem [ref=e65]:
        - text: 
        - generic [ref=e66]: Login
    - generic [ref=e72]:
      - heading "Login" [level=4] [ref=e73]
      - separator [ref=e74]
      - paragraph [ref=e75]: indicates mandatory fields
      - form [ref=e76]:
        - generic [ref=e78]:
          - generic [ref=e79]: Username
          - textbox "Username" [active] [ref=e81]:
            - /placeholder: Enter Username
        - generic [ref=e83]:
          - generic [ref=e84]: Password
          - textbox "Password" [ref=e86]:
            - /placeholder: Enter Password
        - button "Login" [ref=e91] [cursor=pointer]
        - generic [ref=e92]:
          - link "Forgot Username" [ref=e94] [cursor=pointer]:
            - /url: /services/forgotusername
          - link "Forgot Password" [ref=e97] [cursor=pointer]:
            - /url: /services/forgotpassword
        - paragraph [ref=e100]:
          - generic [ref=e101]: 
          - strong [ref=e102]: "First time login:"
          - text: If you are logging in for the first time, click
          - link "here" [ref=e103] [cursor=pointer]:
            - /url: /services/newlogin
          - text: to log in.
  - contentinfo [ref=e104]:
    - generic "Expand/Collapse Footer" [ref=e106] [cursor=pointer]: 
    - generic [ref=e108]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - link "About GST" [ref=e113] [cursor=pointer]:
            - /url: //www.gst.gov.in/about/gst/history
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "GST Council Structure" [ref=e116] [cursor=pointer]:
                - /url: //www.gst.gov.in/about/gst/council
            - listitem [ref=e117]:
              - link "GST History" [ref=e118] [cursor=pointer]:
                - /url: //www.gst.gov.in/about/gst/history
        - generic [ref=e119]:
          - link "Website Policies" [ref=e120] [cursor=pointer]:
            - /url: //www.gst.gov.in/policies/website
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "Website Policy" [ref=e123] [cursor=pointer]:
                - /url: //www.gst.gov.in/policies/website
            - listitem [ref=e124]:
              - link "Terms and Conditions" [ref=e125] [cursor=pointer]:
                - /url: //www.gst.gov.in/policies/termsandconditions
            - listitem [ref=e126]:
              - link "Hyperlink Policy" [ref=e127] [cursor=pointer]:
                - /url: //www.gst.gov.in/policies/hyperlink
            - listitem [ref=e128]:
              - link "Disclaimer" [ref=e129] [cursor=pointer]:
                - /url: //www.gst.gov.in/policies/disclaimer
        - generic [ref=e130]:
          - link "Related Sites" [ref=e131] [cursor=pointer]:
            - /url: //www.gst.gov.in/help/relatedsites
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link "Central Board of Indirect Taxes and Customs" [ref=e134] [cursor=pointer]:
                - /url: http://www.cbic.gov.in/
            - listitem [ref=e135]:
              - link "State Tax Websites" [ref=e136] [cursor=pointer]:
                - /url: //www.gst.gov.in/help/statevat
            - listitem [ref=e137]:
              - link "National Portal" [ref=e138] [cursor=pointer]:
                - /url: https://www.india.gov.in/
        - generic [ref=e139]:
          - link "Help and Taxpayer Facilities" [ref=e140] [cursor=pointer]:
            - /url: //services.gst.gov.in/services/HelpandTaxpayer/HelpandTaxpayerfacilities
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "System Requirements" [ref=e143] [cursor=pointer]:
                - /url: //www.gst.gov.in/system/
            - listitem [ref=e144]:
              - link "GST Knowledge Portal" [ref=e145] [cursor=pointer]:
                - /url: //www.gst.gov.in/help/helpmodules/
            - listitem [ref=e146]:
              - link "GST Media" [ref=e147] [cursor=pointer]:
                - /url: https://www.youtube.com/c/GoodsandServicesTaxNetwork
            - listitem [ref=e148]:
              - link "Site Map" [ref=e149] [cursor=pointer]:
                - /url: //services.gst.gov.in/services/sitemap
            - listitem [ref=e150]:
              - link "Grievance Nodal Officers" [ref=e151] [cursor=pointer]:
                - /url: //services.gst.gov.in/services/grievanceNodalOfficer
            - listitem [ref=e152]:
              - link "Free Accounting and Billing Services" [ref=e153] [cursor=pointer]:
                - /url: https://gstn.org.in/empaneled-companies
            - listitem [ref=e154]:
              - link "GST Suvidha Providers" [ref=e155] [cursor=pointer]:
                - /url: https://gstn.org.in/gsp-ecosystem
        - generic [ref=e156]:
          - link "Contact Us" [ref=e157] [cursor=pointer]:
            - /url: //www.gst.gov.in/contact
          - list [ref=e158]:
            - listitem [ref=e159]:
              - generic [ref=e160]:
                - text: "Help Desk Number:"
                - text: 1800-103-4786
            - listitem [ref=e161]:
              - generic [ref=e162]: "Log/Track Your Issue:"
              - link "Grievance Redressal Portal for GST" [ref=e163] [cursor=pointer]:
                - /url: https://selfservice.gstsystem.in/
            - listitem [ref=e164]:
              - link "Facebook" [ref=e165] [cursor=pointer]:
                - /url: //www.facebook.com/Goods-and-Services-Tax-1674179706229522/?fref=ts
                - img [ref=e167]
              - link "Youtube" [ref=e168] [cursor=pointer]:
                - /url: //www.youtube.com/channel/UCFYpOk92qurlO5t-Z_y-bOQ
                - img [ref=e170]
              - link "Twitter" [ref=e171] [cursor=pointer]:
                - /url: //twitter.com/Infosys_GSTN
                - img [ref=e173]
              - link "Linkedin" [ref=e174] [cursor=pointer]:
                - /url: //www.linkedin.com/company/gstn-official/about/?viewAsMember=true
                - img [ref=e176]
      - generic [ref=e180]:
        - paragraph [ref=e181]: © 2026-27 Goods and Services Tax Network
        - paragraph [ref=e182]: Site Last Updated on 29-05-2026
        - paragraph [ref=e183]: Designed & Developed by GSTN
      - paragraph [ref=e188]: Site best viewed at 1024 x 768 resolution in Microsoft Edge, Google Chrome 49+, Firefox 45+ and Safari 6+
  - text: 
```

# Test source

```ts
  1 | import {test,expect} from '@playwright/test';
  2 | test('vs',async({page})=>{
  3 |     await page.goto('https://services.gst.gov.in/services/login');
> 4 |     expect(await page.screenshot()).toMatchSnapshot('gst_login.png');
    |                                     ^ Error: A snapshot doesn't exist at C:\Users\ranga\OneDrive\Desktop\praveen\PW\test\VStesting.ts-snapshots\gst-login-chromium-win32.png, writing actual.
  5 | });
```