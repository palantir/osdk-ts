import{j as r,M as s}from"./iframe-CImoBJWj.js";import{P as p}from"./pdf-viewer-xAbYYKxb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BXhOLIF7.js";import"./preload-helper-IQX6vey9.js";import"./PdfViewer-DS5bAgqu.js";import"./index-Cup5tXcg.js";import"./BasePdfViewer-ElVYZXne.js";import"./BasePdfViewer.module.css-CmHzrd1k.js";import"./PdfViewerAnnotationLayer-Cjr9iGtU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LZk6TEIL.js";import"./PdfViewerOutlineSidebar-DXt7SHV0.js";import"./PdfViewerSidebarHeader-Cl9sHXy4.js";import"./useBaseUiId-DK9CjSol.js";import"./useControlled-5ShBBeuE.js";import"./CompositeRoot-BdWSXYxZ.js";import"./CompositeItem-wd-v0oiM.js";import"./ToolbarRootContext-UrwTEYWQ.js";import"./composite-wTqD7xb9.js";import"./svgIconContainer-CDIM8d0X.js";import"./PdfViewerSearchBar-PJJu6Edh.js";import"./chevron-up-PBV9rbHb.js";import"./chevron-down-By6KsCFI.js";import"./cross-BqnYY50C.js";import"./PdfViewerSidebar-D0Heqkbz.js";import"./index-CvP_uE7p.js";import"./index-Bp-sZfW0.js";import"./index-BO30NG2p.js";import"./PdfViewerToolbar-CHC1ePwJ.js";import"./Button-DBcwhCWE.js";import"./chevron-right-BPrhETWM.js";import"./Input-Soc66haA.js";import"./search-C3EkrB74.js";import"./spin-DFOw-bFw.js";import"./error-BhWP_ezt.js";import"./withOsdkMetrics-BzR5lmI7.js";import"./makeExternalStore-DWGtL2cW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
