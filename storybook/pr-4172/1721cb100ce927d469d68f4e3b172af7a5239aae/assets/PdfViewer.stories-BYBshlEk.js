import{j as r,M as s}from"./iframe-B7aJzwbo.js";import{P as p}from"./pdf-viewer-3DHvMc5Y.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-oigPAbq9.js";import"./preload-helper-eRVNIb5p.js";import"./PdfViewer-DmZV01Zh.js";import"./index-RdZvG0OW.js";import"./BasePdfViewer-BPEFPF67.js";import"./BasePdfViewer.module.css-CJyyIC6I.js";import"./PdfViewerAnnotationLayer-Cn1M5yjk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8EoJZINk.js";import"./PdfViewerOutlineSidebar-CSMK4xCS.js";import"./PdfViewerSidebarHeader-DXM-_MWs.js";import"./useBaseUiId-CkpX5NB7.js";import"./useControlled-BukasUFK.js";import"./CompositeRoot-DRlfgqoB.js";import"./CompositeItem-D0hFRJVg.js";import"./ToolbarRootContext-NP1s66to.js";import"./composite-HBnNRj0V.js";import"./svgIconContainer-CdK9JNQh.js";import"./PdfViewerSearchBar-DQL19Wlt.js";import"./chevron-up-C7Q58OFU.js";import"./chevron-down-BK8JqzlO.js";import"./cross-B1O6ebQi.js";import"./PdfViewerSidebar-NPm4TWUJ.js";import"./index-DALXba2W.js";import"./index-8RrkNowe.js";import"./index-CkeudptZ.js";import"./PdfViewerToolbar-DkYQl8JJ.js";import"./Button-C-woLY16.js";import"./chevron-right-Bwc3rLwz.js";import"./Input-qBFcNfHq.js";import"./search-CZmCb7y8.js";import"./spin-Iyt7t25L.js";import"./error-CWUTjlhY.js";import"./withOsdkMetrics-4AR2Wafq.js";import"./makeExternalStore--7xxm-Xg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
