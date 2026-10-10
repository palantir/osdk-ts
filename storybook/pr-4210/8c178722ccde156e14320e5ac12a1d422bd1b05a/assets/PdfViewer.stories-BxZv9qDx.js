import{j as r,M as s}from"./iframe-CvUSgiu3.js";import{P as p}from"./pdf-viewer-DWj4o0NT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CsV05EM2.js";import"./preload-helper-B0zyaiwI.js";import"./PdfViewer-BjMUlkWg.js";import"./index-DmcWe2qf.js";import"./BasePdfViewer-B7C7VKcr.js";import"./BasePdfViewer.module.css-DLtOfhN-.js";import"./PdfViewerAnnotationLayer-wTRExLFA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-De__YhDF.js";import"./PdfViewerOutlineSidebar-B8Umehmg.js";import"./PdfViewerSidebarHeader-BrRis7dm.js";import"./useBaseUiId-DY1Z1crQ.js";import"./useControlled-DxVirw8z.js";import"./CompositeRoot-CcJNiJRM.js";import"./CompositeItem-BekmKE9y.js";import"./ToolbarRootContext-BRgMGrEJ.js";import"./composite-2ofaKrdo.js";import"./svgIconContainer-CTy32Y-c.js";import"./PdfViewerSearchBar-DTEB9XzN.js";import"./chevron-up-b89XhrlV.js";import"./chevron-down-BJ7q-Z6f.js";import"./cross-DrZXwXEo.js";import"./PdfViewerSidebar-DqDustDk.js";import"./index-CSjUKw3W.js";import"./index-Cn7kZwJh.js";import"./index-40gUd9cg.js";import"./PdfViewerToolbar-C5atoHyi.js";import"./Button-BbMrXCM7.js";import"./chevron-right-BkM_EMCZ.js";import"./Input-Dqxb3pxV.js";import"./search-BikN9LqI.js";import"./spin-DFKcaS5W.js";import"./error-CFT8_0w_.js";import"./withOsdkMetrics-B2ewH9eG.js";import"./makeExternalStore-BqQyfi25.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
