import{j as i}from"./iframe-Yw9TZb4u.js";import{O as p}from"./object-table-DaX2y8Ir.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-v-2OFQr2.js";import"./preload-helper-D_xjOrEt.js";import"./Table-CpavOXJj.js";import"./index-8aWnL4Lo.js";import"./Dialog-D2wMKlyn.js";import"./cross-DTT8xN_V.js";import"./svgIconContainer-BIiUvxcP.js";import"./useBaseUiId-BO9crViw.js";import"./InternalBackdrop-B1PWndwc.js";import"./composite-BNHMrFyE.js";import"./index-kxnQI0Cl.js";import"./index-DC5PMXgz.js";import"./index-CJnR7cM_.js";import"./useEventCallback-BiHOi3SY.js";import"./SkeletonBar-3dZxATgt.js";import"./LoadingCell-3c9bVrHn.js";import"./ColumnConfigDialog-BtuzXin0.js";import"./DraggableList-Cmwd3_Yn.js";import"./search-BQQODEli.js";import"./Input-CSG_diAL.js";import"./useControlled-BzIkjd0M.js";import"./Button-C1MrjwiB.js";import"./small-cross-DkpqNIrR.js";import"./ActionButton-wy0NESyC.js";import"./Checkbox-DJL0SHLK.js";import"./useValueChanged-CulitGOu.js";import"./CollapsiblePanel-DTI6vdFY.js";import"./MultiColumnSortDialog-mkWalreF.js";import"./MenuTrigger-DKA7SRF7.js";import"./CompositeItem-BD6lDA45.js";import"./ToolbarRootContext-BU6uR7dz.js";import"./getDisabledMountTransitionStyles-8x2Gf4ix.js";import"./getPseudoElementBounds-DuGEZlai.js";import"./chevron-down-oj878TNR.js";import"./index-CibthTqO.js";import"./error-BrfIeh_k.js";import"./BaseCbacBanner-BLH2XH0j.js";import"./makeExternalStore-C9-V4S7e.js";import"./Tooltip-DMJgRtRS.js";import"./PopoverPopup-5dJ4xSYR.js";import"./debounce-BfGqlc0J.js";import"./useOsdkClient-ClnO36Ir.js";import"./tick-8C35Ay4D.js";import"./DropdownField-Dzx1y_MO.js";import"./isEqual-D6Dds2Xo.js";import"./withOsdkMetrics-ChgDZqBx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
