import{j as r,M as s}from"./iframe-CgfdIm0T.js";import{P as p}from"./pdf-viewer-Ba50LgOF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B9bzXvEF.js";import"./preload-helper-C8qWAL46.js";import"./PdfViewer-C3or14G8.js";import"./index-BeSyGo3F.js";import"./BasePdfViewer-CoIXuJu6.js";import"./BasePdfViewer.module.css-CZAMm33E.js";import"./PdfViewerAnnotationLayer-BE4T7tSW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BdFmrZXA.js";import"./PdfViewerOutlineSidebar-CTfH6jZ-.js";import"./PdfViewerSidebarHeader-DE6nwH_o.js";import"./useBaseUiId-BuuF3bkV.js";import"./useControlled-B0N5dBnJ.js";import"./CompositeRoot-rMSq6YJS.js";import"./CompositeItem-BTF_cTSf.js";import"./ToolbarRootContext-DMK8ajZX.js";import"./composite-CUpx3Hda.js";import"./svgIconContainer-DQ0tbGLY.js";import"./PdfViewerSearchBar-BjgYvnPL.js";import"./chevron-up-B7_YTyjt.js";import"./chevron-down-CiBD6Dqi.js";import"./cross-CWciybKu.js";import"./PdfViewerSidebar-BOe-A_ar.js";import"./index-BBcDpAeT.js";import"./index-B8rhYuyr.js";import"./index-bby2SWWb.js";import"./PdfViewerToolbar-d_7AVi2s.js";import"./Button-CVc3RSfH.js";import"./chevron-right-DyhkWm4i.js";import"./Input-BG9nzqHz.js";import"./search-DENXSVyb.js";import"./spin-CVun6b-y.js";import"./error-Bu8LxMV7.js";import"./withOsdkMetrics-BU1Vym1S.js";import"./makeExternalStore-BNPt347_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
