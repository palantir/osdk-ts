import{j as r,M as s}from"./iframe-BTZXjcS6.js";import{P as p}from"./pdf-viewer-CKoVtxGW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CsGUeRa9.js";import"./preload-helper-C9NzPdgc.js";import"./PdfViewer-DQTUpbxq.js";import"./index-CeqBwR3m.js";import"./BasePdfViewer-Bn7eNZiM.js";import"./BasePdfViewer.module.css-94aqFAAA.js";import"./PdfViewerAnnotationLayer-Cfhh_U8z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzzV3VxX.js";import"./PdfViewerOutlineSidebar-BlpUjvuE.js";import"./PdfViewerSidebarHeader-BhDuSSxr.js";import"./useBaseUiId-BYa5JSvm.js";import"./useControlled-D3czSe4k.js";import"./CompositeRoot-DgLdT1BM.js";import"./CompositeItem-BbZyoEpe.js";import"./ToolbarRootContext-CSsWfPwj.js";import"./composite-Bir0R2T2.js";import"./svgIconContainer-B_6Ye4VC.js";import"./PdfViewerSearchBar-BsrH6ysW.js";import"./chevron-up-DuZTZv0H.js";import"./chevron-down-BnB-eP8_.js";import"./cross-B7KIcqou.js";import"./PdfViewerSidebar-Bt14astp.js";import"./index-BwVZwZx_.js";import"./index-Bc5CyDlw.js";import"./index-PyK1kYPr.js";import"./PdfViewerToolbar-6phrPA_c.js";import"./Button-tBNbm5Ca.js";import"./chevron-right-DU91Ek_7.js";import"./Input-CufnAxBU.js";import"./search-B_jja5k9.js";import"./spin-B0b0Pj0S.js";import"./error-CNEXn0eH.js";import"./withOsdkMetrics-Ca4dglEg.js";import"./makeExternalStore-CzWUEmmK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
