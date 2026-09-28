import{j as r,M as s}from"./iframe-CzOIzVud.js";import{P as p}from"./pdf-viewer-C9UjQlnF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DP44HDMx.js";import"./preload-helper-CwMKM08Q.js";import"./PdfViewer-HAjOdPtr.js";import"./index-CTmIGBdU.js";import"./BasePdfViewer-cy8XMASj.js";import"./BasePdfViewer.module.css-8RYQIiKb.js";import"./PdfViewerAnnotationLayer-DEMVIv9S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-Gy6R7c.js";import"./PdfViewerOutlineSidebar-GSxGUJep.js";import"./PdfViewerSidebarHeader-BetpiRKk.js";import"./useBaseUiId-PA6AbvCv.js";import"./useControlled-Bl4FNa4w.js";import"./CompositeRoot-BXSLcrc9.js";import"./CompositeItem-A6EkfQUI.js";import"./ToolbarRootContext-CMaoaTCy.js";import"./composite-CCnWWb1N.js";import"./svgIconContainer-0bhWATaq.js";import"./PdfViewerSearchBar-BNaTsg_U.js";import"./chevron-up-C-Wjc271.js";import"./chevron-down-Cb1symQ7.js";import"./cross-ChoO-hHZ.js";import"./PdfViewerSidebar-XbG0PMHa.js";import"./index-BFY6m5n5.js";import"./index-CYHilSIV.js";import"./index-OcnJrvDb.js";import"./PdfViewerToolbar-DRkkFOOc.js";import"./Button-PAMPzLp5.js";import"./chevron-right-B3-RM2Nl.js";import"./Input-C7TpWAR_.js";import"./search-OylK7gf9.js";import"./spin-DnxmArJR.js";import"./error-bNK0ajAf.js";import"./withOsdkMetrics-C2KUxQ8x.js";import"./makeExternalStore-BLR6RjGC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
