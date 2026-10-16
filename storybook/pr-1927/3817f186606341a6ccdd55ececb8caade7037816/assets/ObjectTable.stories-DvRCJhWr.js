import{j as i}from"./iframe-DmjyB9qr.js";import{O as p}from"./object-table-BgGiwYnL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-VPRIaNdS.js";import"./preload-helper-CAx3wjDj.js";import"./Table-fnyTkzoV.js";import"./index-D4TDlc_O.js";import"./Dialog-3AtA3abT.js";import"./cross-C5lxgD8z.js";import"./svgIconContainer-D2c8Ba4-.js";import"./useBaseUiId-BIBlatd5.js";import"./InternalBackdrop-CPUdsPru.js";import"./composite-ClGRLeRM.js";import"./index-CaiUNbzc.js";import"./index-Cv1wdKn8.js";import"./index-DaPZuE20.js";import"./useEventCallback-BDzgTZ89.js";import"./SkeletonBar-D7_1dMLv.js";import"./LoadingCell-iGmoUmLt.js";import"./ColumnConfigDialog-5IQv3rnK.js";import"./DraggableList-Zr6y84A2.js";import"./search-CQ17z9WA.js";import"./Input-CLw0N-7T.js";import"./useControlled-Bb9znHKm.js";import"./Button-DBHSL7QN.js";import"./small-cross-DjWAfLNP.js";import"./ActionButton-B_Fb6ob-.js";import"./Checkbox-B1MeKgvP.js";import"./useValueChanged-BLYKdZPH.js";import"./CollapsiblePanel-BBVpPSYq.js";import"./MultiColumnSortDialog-BHEa5kPa.js";import"./MenuTrigger-Bt2b4Jd1.js";import"./CompositeItem-DhSM1hah.js";import"./ToolbarRootContext-9w_REGks.js";import"./getDisabledMountTransitionStyles-Cs3lm4js.js";import"./getPseudoElementBounds-DttlvabX.js";import"./chevron-down-8HOE1Tp7.js";import"./index-ByDovlnf.js";import"./error-C5ZuOycH.js";import"./BaseCbacBanner-zoKqjEbA.js";import"./makeExternalStore-BpvdNYu5.js";import"./Tooltip-DoFgPSBW.js";import"./PopoverPopup-B54LMItf.js";import"./debounce-BacvmWfK.js";import"./useOsdkClient-C4LtXzbF.js";import"./tick-BMnkz0dp.js";import"./DropdownField-B6gxSasK.js";import"./isEqual-8t1qMO1j.js";import"./withOsdkMetrics-DRRr7i5M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
