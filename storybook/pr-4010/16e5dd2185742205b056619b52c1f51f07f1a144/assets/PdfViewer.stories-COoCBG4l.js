import{j as r,M as s}from"./iframe-OLZMb4D5.js";import{P as p}from"./pdf-viewer-BRkFwyCi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BMsXQCsV.js";import"./preload-helper-RKY21aDn.js";import"./PdfViewer-DIayQK8K.js";import"./index-uqrBuBmm.js";import"./BasePdfViewer-CQiDbQyb.js";import"./BasePdfViewer.module.css-BaF5p1FT.js";import"./PdfViewerAnnotationLayer-upOH1jpT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BPKz9q2A.js";import"./PdfViewerOutlineSidebar-CzzvHGo1.js";import"./PdfViewerSidebarHeader-Dx-liDTD.js";import"./useBaseUiId-PcdFyC4z.js";import"./useControlled-D50eYvCK.js";import"./CompositeRoot-BpRohMBH.js";import"./CompositeItem-DUyVPGMH.js";import"./ToolbarRootContext-DulRS7Xf.js";import"./composite-ccxieFdd.js";import"./svgIconContainer-UQoXiqqi.js";import"./PdfViewerSearchBar-BPJNRkMH.js";import"./chevron-up-DVCgUK4I.js";import"./chevron-down-CIukKbVS.js";import"./cross-C6sWsdCt.js";import"./PdfViewerSidebar-AezBwM3t.js";import"./index-3bphJVPw.js";import"./index-9pMWT7G3.js";import"./index-DzOZG8PU.js";import"./PdfViewerToolbar-Bo3Fadnt.js";import"./Button-CVZ672ZX.js";import"./chevron-right-HqUdsoJs.js";import"./Input-CNxC7OWq.js";import"./search-DZcjiMHC.js";import"./spin-D9DTAhEM.js";import"./error-CeyqzC3E.js";import"./withOsdkMetrics-B3WIkRHJ.js";import"./makeExternalStore-BBNFskLs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
