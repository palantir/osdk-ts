import{j as r}from"./iframe-B7aJzwbo.js";import{O as b}from"./object-table-BA38ri4w.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-N9aWj74S.js";import{u as g}from"./useOsdkClient-CeMWOo2K.js";import"./preload-helper-eRVNIb5p.js";import"./Table-DHAUBTfV.js";import"./index-RdZvG0OW.js";import"./Dialog-Dc6kQRcA.js";import"./cross-B1O6ebQi.js";import"./svgIconContainer-CdK9JNQh.js";import"./useBaseUiId-CkpX5NB7.js";import"./InternalBackdrop-CCGHrTok.js";import"./composite-HBnNRj0V.js";import"./index-8RrkNowe.js";import"./index-CkeudptZ.js";import"./index-7YIR26jv.js";import"./useEventCallback-BnLqpuJa.js";import"./SkeletonBar-C0OTRwFB.js";import"./LoadingCell-DnbsiJg3.js";import"./ColumnConfigDialog-CB497VjP.js";import"./DraggableList-B8mPrhwS.js";import"./search-CZmCb7y8.js";import"./Input-qBFcNfHq.js";import"./useControlled-BukasUFK.js";import"./Button-C-woLY16.js";import"./small-cross-CNtYeUul.js";import"./ActionButton-DUUDtffd.js";import"./Checkbox-CPEg9uHI.js";import"./useValueChanged-C6TaqKGn.js";import"./CollapsiblePanel-DOUntJrC.js";import"./MultiColumnSortDialog-a30AKw6B.js";import"./MenuTrigger-DCPrp2MJ.js";import"./CompositeItem-D0hFRJVg.js";import"./ToolbarRootContext-NP1s66to.js";import"./getDisabledMountTransitionStyles-zUIg4MN2.js";import"./getPseudoElementBounds-CvilJ6ol.js";import"./chevron-down-BK8JqzlO.js";import"./index-DALXba2W.js";import"./error-CWUTjlhY.js";import"./BaseCbacBanner-5DfHjm3U.js";import"./makeExternalStore--7xxm-Xg.js";import"./Tooltip-C9jwtRtJ.js";import"./PopoverPopup-DN9sGOVC.js";import"./debounce-B7x7S7rs.js";import"./tick-BbAB870P.js";import"./DropdownField-DAAdN4xL.js";import"./isEqual-D-93a5AU.js";import"./withOsdkMetrics-4AR2Wafq.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
