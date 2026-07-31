import{j as i}from"./iframe-CVbJrMx7.js";import{O as p}from"./object-table-Bcho5ZdX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-jFibgA7u.js";import"./preload-helper-Bi2CkPaH.js";import"./Table-Dgj-KEc-.js";import"./index-4zqcjDaD.js";import"./Dialog-Ctn42VeV.js";import"./cross-CMD59SEE.js";import"./svgIconContainer-CSuEqcx2.js";import"./useBaseUiId-6l5ZMBvp.js";import"./InternalBackdrop-D0LdYj0Q.js";import"./composite-DU8HRqMQ.js";import"./index-ByBvz6yB.js";import"./index-BBjaT9-B.js";import"./index-Bvv2KJcj.js";import"./useEventCallback-DnwhgWiF.js";import"./SkeletonBar-vVakX1FI.js";import"./LoadingCell-BJeluyL9.js";import"./ColumnConfigDialog-B8n0OJ5R.js";import"./DraggableList-DAQv2E1C.js";import"./search-BIKIgIOT.js";import"./Input-CCWoJTpA.js";import"./useControlled-BjiYNtSn.js";import"./isEqual-DBIrGstF.js";import"./isObject-DyOuyG5A.js";import"./Button-BRR8MBDs.js";import"./ActionButton-JTtsLIS3.js";import"./Checkbox-DDEE0C56.js";import"./useValueChanged-DZlo1eLL.js";import"./CollapsiblePanel-C6pZJrt2.js";import"./MultiColumnSortDialog-BDVS65V3.js";import"./MenuTrigger-CCHLTuVP.js";import"./CompositeItem-DgkAeX91.js";import"./ToolbarRootContext-BQ1Os6dU.js";import"./getDisabledMountTransitionStyles-DXIS3a3T.js";import"./getPseudoElementBounds-CNmedg3f.js";import"./chevron-down-B7HicDSz.js";import"./index-DNvASVW6.js";import"./error-CnlAvsn-.js";import"./BaseCbacBanner-DQCr1LoZ.js";import"./makeExternalStore-vLSrVJKb.js";import"./Tooltip-BZlE1UbS.js";import"./PopoverPopup-16X7FiIT.js";import"./toNumber-DTHC56UF.js";import"./useOsdkClient-RliEKiAs.js";import"./tick-DNFy_FvK.js";import"./DropdownField-D0P5-rPf.js";import"./withOsdkMetrics-DuX2Gvrb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
