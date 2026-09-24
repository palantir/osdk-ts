import{j as r,M as s}from"./iframe-0nbFd4Up.js";import{P as p}from"./pdf-viewer-CThjNzZv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPoDqkeE.js";import"./preload-helper-C9c2Zh8f.js";import"./PdfViewer-BYZaOHjJ.js";import"./index-DwMakAAg.js";import"./BasePdfViewer-CnFoeYuK.js";import"./BasePdfViewer.module.css-Ckb6rEn9.js";import"./PdfViewerAnnotationLayer-DI0GItR4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B0tovWLs.js";import"./PdfViewerOutlineSidebar-Cw_k7XVf.js";import"./PdfViewerSidebarHeader-B96Ztgdc.js";import"./useBaseUiId-hHYCbJGR.js";import"./useControlled-Gi7J51jw.js";import"./CompositeRoot-DeccQZNp.js";import"./CompositeItem-C9hOZqfz.js";import"./ToolbarRootContext-B0NC_oEf.js";import"./composite-BsbtETqs.js";import"./svgIconContainer-CfgrNU9r.js";import"./PdfViewerSearchBar-B_XMBn3K.js";import"./chevron-up-Cx5pxXPE.js";import"./chevron-down-BNwXq3g8.js";import"./cross-DNUyMOOH.js";import"./PdfViewerSidebar-ay0gEFB9.js";import"./index-BxiA765S.js";import"./index-5aC9zCcy.js";import"./index-CS8KPTZX.js";import"./PdfViewerToolbar-C_USScj6.js";import"./Button-Cn_l7fEs.js";import"./chevron-right-C3-rjz1K.js";import"./Input-YuE0Ls83.js";import"./search-DDtr797p.js";import"./spin-w4FWlgES.js";import"./error-CFI9j2MF.js";import"./withOsdkMetrics-DTNlxinE.js";import"./makeExternalStore-Dwl2nMnb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
