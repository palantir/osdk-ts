import{j as r,M as s}from"./iframe-GU9uuCxz.js";import{P as p}from"./pdf-viewer-CT76uIul.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BZb1R4hk.js";import"./preload-helper-DiuBXggc.js";import"./PdfViewer-CWvExyXW.js";import"./index-wbqNQUCN.js";import"./BasePdfViewer-BeY_2pVz.js";import"./BasePdfViewer.module.css-kqU8J_AH.js";import"./PdfViewerAnnotationLayer-8MtwoGrB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dw-VnRAQ.js";import"./PdfViewerOutlineSidebar-BbSu7SF7.js";import"./PdfViewerSidebarHeader-CEtyFSem.js";import"./useBaseUiId-izgrlbm8.js";import"./useControlled-DeKlo4Fr.js";import"./CompositeRoot-kmIDf_th.js";import"./CompositeItem-Cx8rt4Os.js";import"./ToolbarRootContext-CAN5koek.js";import"./composite-D5bxH43Y.js";import"./svgIconContainer-lMVp7Q5D.js";import"./PdfViewerSearchBar-onjHtCUJ.js";import"./chevron-up-Cj-U_sFG.js";import"./chevron-down-TCTUxLeS.js";import"./cross-lUtkcXvq.js";import"./PdfViewerSidebar-D7B7fTLD.js";import"./index-C3igxD5N.js";import"./index-BiQmph9i.js";import"./index-CWdNU6XI.js";import"./PdfViewerToolbar-DhsX0_sK.js";import"./Button-BfmdkMAB.js";import"./chevron-right-Cn-Ar5z3.js";import"./Input-D7wHTW3A.js";import"./search-BwM3LpYv.js";import"./spin-k19-TIdf.js";import"./error-BZwp4K-_.js";import"./withOsdkMetrics-BKdRrZP1.js";import"./makeExternalStore-B8P6l5nx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
