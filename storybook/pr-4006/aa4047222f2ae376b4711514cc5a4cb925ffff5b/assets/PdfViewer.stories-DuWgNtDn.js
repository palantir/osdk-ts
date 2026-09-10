import{j as r,M as s}from"./iframe-C1TIX5JI.js";import{P as p}from"./pdf-viewer-C7uG_yEB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DHot6RJx.js";import"./preload-helper-BtZpkMB0.js";import"./PdfViewer-q_0FFaYl.js";import"./index-Gx0d5aEB.js";import"./BasePdfViewer-C3KWQ_MY.js";import"./BasePdfViewer.module.css-BH1QMyCr.js";import"./PdfViewerAnnotationLayer-C1F4y92t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-sg5PQX.js";import"./PdfViewerOutlineSidebar-7NkuHCyl.js";import"./PdfViewerSidebarHeader-Ckv8SnfD.js";import"./useBaseUiId-DePiMeOB.js";import"./useControlled-C6axbr2z.js";import"./CompositeRoot-D5fsi7vB.js";import"./CompositeItem-CBntDvdI.js";import"./ToolbarRootContext-B4mO9KPM.js";import"./composite-C4rxhLiP.js";import"./svgIconContainer-C8MADQYH.js";import"./PdfViewerSearchBar-EwQusmQz.js";import"./chevron-up-DM-88PbA.js";import"./chevron-down-CtHVru-S.js";import"./cross-BhNrYvcF.js";import"./PdfViewerSidebar-DjIQCcT5.js";import"./index-U8HSbgyt.js";import"./index-DJqIo3bD.js";import"./index-CIcyQnyh.js";import"./PdfViewerToolbar-ByS0pfeu.js";import"./Button-CpS9y80N.js";import"./chevron-right-D5-wbX37.js";import"./Input-bIhTrC5p.js";import"./search-LH-9seDT.js";import"./spin-QDI_PzUQ.js";import"./error-DkEU1DEd.js";import"./withOsdkMetrics-BYJpc4fR.js";import"./makeExternalStore-DRXMdcub.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
