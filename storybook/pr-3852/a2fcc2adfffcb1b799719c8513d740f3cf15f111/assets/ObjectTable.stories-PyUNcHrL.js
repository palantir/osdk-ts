import{j as i}from"./iframe-CR0jsk8T.js";import{O as p}from"./object-table-CbDQCRdf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C_6XH8d4.js";import"./preload-helper-CLM-aN-8.js";import"./Table-D-GB8w9F.js";import"./index-BXDmefey.js";import"./Dialog-BDj_Pu-s.js";import"./cross-C_YRmPKj.js";import"./svgIconContainer-H7nQkb6n.js";import"./useBaseUiId-C44LpUZ_.js";import"./InternalBackdrop-DfOIlirh.js";import"./composite-NkcHW8Ts.js";import"./index-AF0HW_jU.js";import"./index-CviXfYOE.js";import"./index-C0xP1YRP.js";import"./useEventCallback-Dpm5I8hS.js";import"./SkeletonBar-COzcyyjY.js";import"./LoadingCell-2p8cREMA.js";import"./ColumnConfigDialog-C0J78ZfR.js";import"./DraggableList-DB4oE_ex.js";import"./search-CBxagsiD.js";import"./Input-BUfDw5Gv.js";import"./useControlled-BYmOvdgF.js";import"./Button-Cwqeh57g.js";import"./small-cross-87BZIShO.js";import"./ActionButton-D1872Zz6.js";import"./Checkbox-Dz3160i5.js";import"./useValueChanged-C26c-Dvh.js";import"./CollapsiblePanel-CsWiyBT2.js";import"./MultiColumnSortDialog-DPvLlybu.js";import"./MenuTrigger-CDrcjfD_.js";import"./CompositeItem-CYqCpyh6.js";import"./ToolbarRootContext-Dw5skxCs.js";import"./getDisabledMountTransitionStyles-BJl_BOkB.js";import"./getPseudoElementBounds-DYw0j0iR.js";import"./chevron-down-CgS2uuYi.js";import"./index-DeB2XC52.js";import"./error-Bqwx5_58.js";import"./BaseCbacBanner-ZqFqIYYB.js";import"./makeExternalStore-DmONQ8uz.js";import"./Tooltip-BzblDmOx.js";import"./PopoverPopup-DcPO1pup.js";import"./debounce-DglcdfXI.js";import"./useOsdkClient-DnL3l3f_.js";import"./tick-D2yfy9E4.js";import"./DropdownField-CZUcN7QE.js";import"./isEqual-DEwKDC01.js";import"./withOsdkMetrics-GDpEsgqr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
