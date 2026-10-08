import{j as r,M as s}from"./iframe-BZFzj4I7.js";import{P as p}from"./pdf-viewer-CyGkSyud.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CShnC6Qf.js";import"./preload-helper-D4VtoqvU.js";import"./PdfViewer-BZ3lKtL2.js";import"./index-C9BOu-GC.js";import"./BasePdfViewer-ByxBGoQu.js";import"./BasePdfViewer.module.css-tDZToo70.js";import"./PdfViewerAnnotationLayer-C7RiEYL0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dtee3M5k.js";import"./PdfViewerOutlineSidebar-aLgP9TFs.js";import"./PdfViewerSidebarHeader-C2wd_pSo.js";import"./useBaseUiId-CynpPIak.js";import"./useControlled-ed2KW_CI.js";import"./CompositeRoot-BEl3DueR.js";import"./CompositeItem-V8rmNgwr.js";import"./ToolbarRootContext-BpRFBWvV.js";import"./composite-DOYm4spg.js";import"./svgIconContainer-BgU1NuNe.js";import"./PdfViewerSearchBar-CBZuBEke.js";import"./chevron-up-Cx2idefM.js";import"./chevron-down-B4Kaehlj.js";import"./cross-8Ktod3hp.js";import"./PdfViewerSidebar-H7zAO5yX.js";import"./index-dwA92LAO.js";import"./index-CRbxC94q.js";import"./index-ZJ1zgTXq.js";import"./PdfViewerToolbar-yNfDGjoS.js";import"./Button-BADC2rqt.js";import"./chevron-right-BcLS8R1H.js";import"./Input-CNdZYHeG.js";import"./search-CtmR8qHz.js";import"./spin-DL9iMFar.js";import"./error-DXjyDcZg.js";import"./withOsdkMetrics-LbVHGHvS.js";import"./makeExternalStore-CONCRK9u.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
