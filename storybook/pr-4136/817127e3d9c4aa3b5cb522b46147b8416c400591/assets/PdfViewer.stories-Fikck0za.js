import{j as r,M as s}from"./iframe-DM2lbhq3.js";import{P as p}from"./pdf-viewer-rDAMJbZX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cc6N8Aur.js";import"./preload-helper-CVlRJCQ4.js";import"./PdfViewer-Db7vaCaV.js";import"./index-BxgMbwQW.js";import"./BasePdfViewer-Df06S_Y6.js";import"./BasePdfViewer.module.css-BNOgVICJ.js";import"./PdfViewerAnnotationLayer-CpsWzoxg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cc5DHz1Z.js";import"./PdfViewerOutlineSidebar-BRTulynT.js";import"./PdfViewerSidebarHeader-B2h3UDqa.js";import"./useBaseUiId-D_FvUqqy.js";import"./useControlled-Ca36YxvC.js";import"./CompositeRoot-RrBSV9xP.js";import"./CompositeItem-BFuIVpH0.js";import"./ToolbarRootContext-Bg6hLVB6.js";import"./composite-iccYdnrf.js";import"./svgIconContainer-DawECmqq.js";import"./PdfViewerSearchBar-Ce9Gpb5f.js";import"./chevron-up-CKNmCDPh.js";import"./chevron-down-DyskK5Yf.js";import"./cross-C6M-wOmQ.js";import"./PdfViewerSidebar-BF6EXatn.js";import"./index-BCS5K0iy.js";import"./index-CCN1yxkK.js";import"./index-Bpwngerd.js";import"./PdfViewerToolbar-Bff4_KW1.js";import"./Button-XbpukpvP.js";import"./chevron-right-Cd5DnwsH.js";import"./Input-CY0qF8uS.js";import"./search-B5W8bLyf.js";import"./spin-r-q90y18.js";import"./error-DJU2sF2P.js";import"./withOsdkMetrics-URzhtFq2.js";import"./makeExternalStore-BiR7BXmk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
