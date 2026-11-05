import{j as r,M as s}from"./iframe-BA-BTX3-.js";import{P as p}from"./pdf-viewer-LYCMBxOf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LVmI_CfK.js";import"./preload-helper-C5CDmGBs.js";import"./PdfViewer-UIduHaDM.js";import"./index-CLtmtywH.js";import"./BasePdfViewer-BWQoY9-f.js";import"./BasePdfViewer.module.css-BRW8olwn.js";import"./PdfViewerAnnotationLayer-0EfzMhjO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CzUR_Zv2.js";import"./PdfViewerOutlineSidebar-h9Cg5fRd.js";import"./PdfViewerSidebarHeader-Brx2xP4W.js";import"./useBaseUiId-BfS85IZC.js";import"./useControlled-UrjDpzSo.js";import"./CompositeRoot-vcMWJ3UX.js";import"./CompositeItem-domKBhoO.js";import"./ToolbarRootContext-DhyEOAqU.js";import"./composite-CTuwrQcp.js";import"./svgIconContainer-Dgy3GTZl.js";import"./PdfViewerSearchBar-B-R4mlak.js";import"./chevron-up-BxOsADFS.js";import"./chevron-down-BhnESDG4.js";import"./cross-D4r7ZnVQ.js";import"./PdfViewerSidebar-X-yZJHnv.js";import"./index-BJs7nm0G.js";import"./index-CHEuFMH1.js";import"./index-PipwlUCm.js";import"./PdfViewerToolbar-Bx3Idkm1.js";import"./Button-CYmxxZwT.js";import"./chevron-right-Boss_FWi.js";import"./Input-BeTQsBeq.js";import"./search-DGIpilYo.js";import"./spin-g8ww1hn8.js";import"./error-rq6qiBRx.js";import"./withOsdkMetrics-bastq8vC.js";import"./makeExternalStore-BUw-VQ9F.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
