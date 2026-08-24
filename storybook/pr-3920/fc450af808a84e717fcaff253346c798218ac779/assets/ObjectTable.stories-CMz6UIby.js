import{j as i}from"./iframe-DcMbTmRa.js";import{O as p}from"./object-table-RQbvyDet.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-u-6PtNtC.js";import"./preload-helper-C7g9GPtA.js";import"./Table-BPyCz4oN.js";import"./index-C60lWWNc.js";import"./Dialog-_Okoz0Me.js";import"./cross-CvsAEbe5.js";import"./svgIconContainer-Dtbx0Dqw.js";import"./useBaseUiId-BoE0CJkX.js";import"./InternalBackdrop-CBppXo8q.js";import"./composite-D9rv3OCk.js";import"./index-8cdMoAmx.js";import"./index-BX5mDqBN.js";import"./index-CWUm4wyT.js";import"./useEventCallback-BxBZ6Q_C.js";import"./SkeletonBar-BFt0iUHq.js";import"./LoadingCell-OD2VOljE.js";import"./ColumnConfigDialog-D-Pdo4ZV.js";import"./DraggableList-BbPqHYfh.js";import"./search-TrEbjpAG.js";import"./Input-CODDUPe4.js";import"./useControlled-DRUQL6h1.js";import"./Button-DwdrXcb7.js";import"./small-cross-B_gXyj8o.js";import"./ActionButton-DuEqwWBd.js";import"./Checkbox-CbqQLQcn.js";import"./useValueChanged-BS7pYpJf.js";import"./CollapsiblePanel-Dr2wSz6F.js";import"./MultiColumnSortDialog-Dec-5vDH.js";import"./MenuTrigger-DF7tK1Vd.js";import"./CompositeItem-BsY89uKf.js";import"./ToolbarRootContext-D6zdw_WQ.js";import"./getDisabledMountTransitionStyles-DunnftaS.js";import"./getPseudoElementBounds-B9qfwwcj.js";import"./chevron-down-C8iVK9bf.js";import"./index-JAMdWW7E.js";import"./error-D9-VUnqg.js";import"./BaseCbacBanner-CftHJWcR.js";import"./makeExternalStore-Cd9hU_OQ.js";import"./Tooltip-tqvCkPOz.js";import"./PopoverPopup-RlIhsigx.js";import"./debounce-B9j-duvu.js";import"./useOsdkClient-uzO2rWFv.js";import"./tick-BLU3AcFY.js";import"./DropdownField-DeOqCMrz.js";import"./isEqual-BrRjolNL.js";import"./withOsdkMetrics-BT35iGvu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
