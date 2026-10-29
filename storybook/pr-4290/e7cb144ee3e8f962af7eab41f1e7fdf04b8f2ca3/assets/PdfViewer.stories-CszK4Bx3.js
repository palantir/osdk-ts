import{j as r,M as s}from"./iframe-hXrfBBL8.js";import{P as p}from"./pdf-viewer-2aFMqSMw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-HQfCSoZo.js";import"./preload-helper-Bqy1uZtT.js";import"./PdfViewer-BnUXdAUb.js";import"./index-uBLz7gbD.js";import"./BasePdfViewer-BFPxnxB-.js";import"./BasePdfViewer.module.css-Cw2Axy0f.js";import"./PdfViewerAnnotationLayer-C45PoEI1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHA6a79e.js";import"./PdfViewerOutlineSidebar-CuIQage_.js";import"./PdfViewerSidebarHeader-DVDfs0A9.js";import"./useBaseUiId-DXzMJ9Pu.js";import"./useControlled-BMHl3Ney.js";import"./CompositeRoot-ZTNjzHOg.js";import"./CompositeItem-CXVgDan9.js";import"./ToolbarRootContext-emE-minV.js";import"./composite-rXoGJEtm.js";import"./svgIconContainer-DT9-fJuD.js";import"./PdfViewerSearchBar-ox5VODlZ.js";import"./chevron-up-BjBS-LsO.js";import"./chevron-down-CbQ2WyOf.js";import"./cross-EKOWl3qR.js";import"./PdfViewerSidebar-DhjecNkJ.js";import"./index-DJPBx90d.js";import"./index-B5iR3PxV.js";import"./index-BwEWCMrj.js";import"./PdfViewerToolbar-CjS6iZrW.js";import"./Button-DA1M1QLW.js";import"./chevron-right-C2qqnwOI.js";import"./Input-DskUev2S.js";import"./search-ClLVbiXV.js";import"./spin-bRAnd_6F.js";import"./error-TXsyVqhB.js";import"./withOsdkMetrics-DSKv7sJY.js";import"./makeExternalStore-WYwpKCNb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
