import{j as r,M as s}from"./iframe-BEJEJisA.js";import{P as p}from"./pdf-viewer-CqjEFWnV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-KqCsAwIq.js";import"./preload-helper-CTiopNJo.js";import"./PdfViewer-V6eDXQZa.js";import"./index-1N58UMzJ.js";import"./BasePdfViewer-Cul4l8zD.js";import"./BasePdfViewer.module.css-CLMoMlgE.js";import"./PdfViewerAnnotationLayer-hbySagAd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kp0xtDJ9.js";import"./PdfViewerOutlineSidebar-B5Zl1fqo.js";import"./PdfViewerSidebarHeader-_1nsi7gn.js";import"./useBaseUiId-Ew8LxSgO.js";import"./useControlled-FA-c2Sau.js";import"./CompositeRoot-C86FSW08.js";import"./CompositeItem-B4OpLzis.js";import"./ToolbarRootContext-NNa6yEkX.js";import"./composite-KwTbpSJb.js";import"./svgIconContainer-DsO6erGI.js";import"./PdfViewerSearchBar-gSpRIy0Y.js";import"./chevron-up-D-Q_6_7V.js";import"./chevron-down-USDozdCe.js";import"./cross-BjrVNHd5.js";import"./PdfViewerSidebar--6Vkym2K.js";import"./index-BgY1n9at.js";import"./index-DCG3LK_H.js";import"./index-BMTQnMoQ.js";import"./PdfViewerToolbar-dUGTaqGE.js";import"./Button-BNegRBwl.js";import"./chevron-right-CRC0a4Qj.js";import"./Input-Dc1pIxfK.js";import"./search-CrTCcvos.js";import"./spin-DdN4wbE2.js";import"./error-C4eZ36G4.js";import"./withOsdkMetrics-Cs8owx7q.js";import"./makeExternalStore-DJsapvxx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
