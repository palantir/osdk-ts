import{j as r,M as s}from"./iframe-gHIh_ABY.js";import{P as p}from"./pdf-viewer-CnaxdpQ0.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-jaacACAb.js";import"./preload-helper-C--wqxNR.js";import"./PdfViewer-DDn2ZTbD.js";import"./index-DyPMxe-T.js";import"./BasePdfViewer-CPn4-Zv1.js";import"./BasePdfViewer.module.css-Dz4r9Wl8.js";import"./PdfViewerAnnotationLayer-BEFq6-ZS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUYnTjGF.js";import"./PdfViewerOutlineSidebar-CDhq4KAO.js";import"./PdfViewerSidebarHeader-B3YPr1NP.js";import"./useBaseUiId-dqf5kUOq.js";import"./useControlled-C8OoR1Ph.js";import"./CompositeRoot-BfFT4DLO.js";import"./CompositeItem-ChBkH7yO.js";import"./ToolbarRootContext-BaCzfuCb.js";import"./composite-G9H6ILMG.js";import"./svgIconContainer-BsQinfdF.js";import"./PdfViewerSearchBar-CMWp_BKN.js";import"./chevron-up-2ZPJJ6TC.js";import"./chevron-down-C9sYZ9oi.js";import"./cross-DecwR9UF.js";import"./PdfViewerSidebar-Cyfz_y0h.js";import"./index-DPBLKrFq.js";import"./index-CWxda7K-.js";import"./index-D1LhnjWM.js";import"./PdfViewerToolbar-HENPbmG6.js";import"./Button-bbhva_Wr.js";import"./chevron-right-DhqUlDOj.js";import"./Input-CphmVuHr.js";import"./search-Blg9RF01.js";import"./spin-DswvesZM.js";import"./error-Bs-UYVj5.js";import"./withOsdkMetrics-DoSr47Bs.js";import"./makeExternalStore-DdIdXh98.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
