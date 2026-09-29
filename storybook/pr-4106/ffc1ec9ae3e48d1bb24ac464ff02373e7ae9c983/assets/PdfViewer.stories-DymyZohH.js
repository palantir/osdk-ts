import{j as r,M as s}from"./iframe-DwbDsShL.js";import{P as p}from"./pdf-viewer-CIJy_Zuc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BP07qrHH.js";import"./preload-helper-DhhmyXUk.js";import"./PdfViewer-Cp2Z71RQ.js";import"./index-BELzmUVs.js";import"./BasePdfViewer-DR9zj0--.js";import"./BasePdfViewer.module.css-Cy6WnIeZ.js";import"./PdfViewerAnnotationLayer-DdB8j7FU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0eDTpft.js";import"./PdfViewerOutlineSidebar-DQAT9Whh.js";import"./PdfViewerSidebarHeader-Csznf6AN.js";import"./useBaseUiId-CKINu-S2.js";import"./useControlled-DY8ufjhO.js";import"./CompositeRoot-8ml9yAPi.js";import"./CompositeItem-DOXgLazM.js";import"./ToolbarRootContext-BPuHUJNX.js";import"./composite-Dplovskw.js";import"./svgIconContainer-xLBfLuAm.js";import"./PdfViewerSearchBar-IhF_83nd.js";import"./chevron-up-hGe-tVgP.js";import"./chevron-down-ckW8ziB1.js";import"./cross-CsyWmC2B.js";import"./PdfViewerSidebar-BARuZJWc.js";import"./index-DZ-Ao651.js";import"./index-DYqy7FgF.js";import"./index-DL-SFPZn.js";import"./PdfViewerToolbar-T6hvnwvN.js";import"./Button-DphpaBib.js";import"./chevron-right-DTs34W3j.js";import"./Input-CMFW6oif.js";import"./search-D1hGu4NI.js";import"./spin-DFTYpsaW.js";import"./error-BJfNfAJx.js";import"./withOsdkMetrics-BqWyBjIv.js";import"./makeExternalStore-y7bd8937.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
