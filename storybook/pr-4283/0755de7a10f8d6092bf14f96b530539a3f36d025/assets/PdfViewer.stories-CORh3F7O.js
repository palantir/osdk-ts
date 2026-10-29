import{j as r,M as s}from"./iframe-Dnji8ErS.js";import{P as p}from"./pdf-viewer-CnXvl7Es.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-pHN2e9Ni.js";import"./preload-helper-DBdP8Q4o.js";import"./PdfViewer-CHU2CUKP.js";import"./index-BNoiE65C.js";import"./BasePdfViewer-DMETN0gN.js";import"./BasePdfViewer.module.css-DkqqAayf.js";import"./PdfViewerAnnotationLayer-uwFCK14P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-JFbpdfQE.js";import"./PdfViewerOutlineSidebar-BE0ipzFJ.js";import"./PdfViewerSidebarHeader-wGoNnZxj.js";import"./useBaseUiId-ScNjevUP.js";import"./useControlled-DmavZ4hp.js";import"./CompositeRoot-noEm189K.js";import"./CompositeItem-YgQK4Acr.js";import"./ToolbarRootContext-BPwepJKC.js";import"./composite-Bo0dFacb.js";import"./svgIconContainer-B0znNA-B.js";import"./PdfViewerSearchBar-o6zREyMV.js";import"./chevron-up-DAO7uCe4.js";import"./chevron-down-r7E6FDSt.js";import"./cross-BWKDw-8_.js";import"./PdfViewerSidebar-CrzxGqtj.js";import"./index-Cj0RyZw2.js";import"./index-Calwhz4q.js";import"./index-BVgNOwgs.js";import"./PdfViewerToolbar-BBlteMDe.js";import"./Button-D-1VZnj-.js";import"./chevron-right-Le_73niQ.js";import"./Input-DyynrLgV.js";import"./search-C5sdVGIt.js";import"./spin-CeAeVWK3.js";import"./error-CpTRDjda.js";import"./withOsdkMetrics-DdDqJJvP.js";import"./makeExternalStore-BNNlgyK5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
