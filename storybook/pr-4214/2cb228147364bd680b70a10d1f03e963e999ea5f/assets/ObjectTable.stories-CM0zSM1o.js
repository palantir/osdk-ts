import{j as i}from"./iframe-Ch9GCQZw.js";import{O as p}from"./object-table-udIH3ti7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CfPVy2v6.js";import"./preload-helper-DnJKIcik.js";import"./Table-BO8sOs9i.js";import"./index-BWo0Chvm.js";import"./Dialog-Cti3TihL.js";import"./cross-BBG8uB8A.js";import"./svgIconContainer-DaQYNeFs.js";import"./useBaseUiId-BHSh6ZdF.js";import"./InternalBackdrop-DiQHfJed.js";import"./composite-B_lrLvaS.js";import"./index-CoyQ9qTH.js";import"./index-DpdzW1OH.js";import"./index-CooRRF-s.js";import"./useEventCallback-BmWtV1Ho.js";import"./SkeletonBar-Df6Ulzih.js";import"./LoadingCell-CmRzlKg4.js";import"./ColumnConfigDialog-BpaIJfKX.js";import"./DraggableList-Db-hzNij.js";import"./search-Bgjfk80F.js";import"./Input-M42Jtpmt.js";import"./useControlled-DlKs0eKw.js";import"./Button-lGY5omo3.js";import"./small-cross-Avc7MGqG.js";import"./ActionButton-Cb3Wx3py.js";import"./Checkbox-Bk0OPOIj.js";import"./useValueChanged-DuDVOcc4.js";import"./CollapsiblePanel-BXjVu9cP.js";import"./MultiColumnSortDialog-eX_F_Wyx.js";import"./MenuTrigger-D-ZULnhu.js";import"./CompositeItem-lOcuUhYq.js";import"./ToolbarRootContext-CxoySA_i.js";import"./getDisabledMountTransitionStyles-BRB-pv4J.js";import"./getPseudoElementBounds-DIP85sgc.js";import"./chevron-down-D219skL8.js";import"./index-BPwpWSia.js";import"./error-CMZUpiIv.js";import"./BaseCbacBanner-Bn0YyQ_S.js";import"./makeExternalStore-CXGYFkuo.js";import"./Tooltip-DC42mvHN.js";import"./PopoverPopup-C3k9he2s.js";import"./debounce-CoINGggm.js";import"./useOsdkClient-CbQE4lpc.js";import"./tick-n5pxQxar.js";import"./DropdownField-BkydTfoJ.js";import"./isEqual-DE8dU3SQ.js";import"./withOsdkMetrics-DaboQw0b.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
