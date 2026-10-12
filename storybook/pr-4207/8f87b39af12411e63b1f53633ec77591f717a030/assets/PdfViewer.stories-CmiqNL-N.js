import{j as r,M as s}from"./iframe-DDCC62mw.js";import{P as p}from"./pdf-viewer-BPxLN8t0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-yhTstp_2.js";import"./preload-helper-TbI6pun2.js";import"./PdfViewer-DCVLyoeG.js";import"./index-z6zT66iy.js";import"./BasePdfViewer-B2S6oBD0.js";import"./BasePdfViewer.module.css-D5U1gmzD.js";import"./PdfViewerAnnotationLayer-DstBWtB9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BT1Sp9IS.js";import"./PdfViewerOutlineSidebar-BZbVPPOj.js";import"./PdfViewerSidebarHeader-8PdRon1u.js";import"./useBaseUiId-Cx54uMSy.js";import"./useControlled-CHZ6ZiHg.js";import"./CompositeRoot-kIU4WUa6.js";import"./CompositeItem-EdV_vQTm.js";import"./ToolbarRootContext-B4LwY6SC.js";import"./composite-oUxuVDiC.js";import"./svgIconContainer-8NI9Pceg.js";import"./PdfViewerSearchBar-DyWXmv1l.js";import"./chevron-up-ekw48iP7.js";import"./chevron-down-CKdPMFgU.js";import"./cross-CFNkWks7.js";import"./PdfViewerSidebar-MrPlJorM.js";import"./index-DNvyrcf-.js";import"./index-BtGfhpV-.js";import"./index-8Tq8e6Kq.js";import"./PdfViewerToolbar-BDyhmE_7.js";import"./Button-DreRcsv2.js";import"./chevron-right-D_ybSs2m.js";import"./Input-L9q-qGHh.js";import"./search-BJP-HOO5.js";import"./spin-BwVqUDtC.js";import"./error-B0SCddV6.js";import"./withOsdkMetrics-3tZAXSEA.js";import"./makeExternalStore-Bpmw5WPB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
