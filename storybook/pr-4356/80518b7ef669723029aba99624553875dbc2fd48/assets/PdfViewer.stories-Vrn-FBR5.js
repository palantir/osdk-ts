import{j as r,M as s}from"./iframe-CEcdsVJq.js";import{P as p}from"./pdf-viewer-DisjtwUA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0xvXXxJ.js";import"./preload-helper-CwdDwPFb.js";import"./PdfViewer-CZNv-9sq.js";import"./index-CYAMjkkg.js";import"./BasePdfViewer-PdAZWgih.js";import"./BasePdfViewer.module.css-DPaZPeQT.js";import"./PdfViewerAnnotationLayer--c6FERf-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bl2E_jXK.js";import"./PdfViewerOutlineSidebar-T08j3CFa.js";import"./PdfViewerSidebarHeader-BK74sqSG.js";import"./useBaseUiId-DGCtOfjA.js";import"./useControlled-oPldRElz.js";import"./CompositeRoot-meSZxGGw.js";import"./CompositeItem-DPYzCgzB.js";import"./ToolbarRootContext-CHwqmaMQ.js";import"./composite-Bw-yzexU.js";import"./svgIconContainer-CM3Ra624.js";import"./PdfViewerSearchBar-D3jAQs9-.js";import"./chevron-up-ARLCOEif.js";import"./chevron-down-C-qVIMYg.js";import"./cross-MZ6bg35c.js";import"./PdfViewerSidebar-BCE9OVtE.js";import"./index-BWNvfyzP.js";import"./index-ByC2L83v.js";import"./index-Dt5JenlP.js";import"./PdfViewerToolbar-DBQJjxBP.js";import"./Button-DE6hvZhq.js";import"./chevron-right-DMsq_kCN.js";import"./Input-tSgTwGI-.js";import"./search-DyPNv9j0.js";import"./spin-x7SuUh2u.js";import"./error-B4aXreAp.js";import"./withOsdkMetrics-Mp4Rwj5-.js";import"./makeExternalStore-BPRH1LKG.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
