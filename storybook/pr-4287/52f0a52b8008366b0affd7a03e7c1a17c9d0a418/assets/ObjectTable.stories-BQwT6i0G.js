import{j as i}from"./iframe-J30hPVdk.js";import{O as p}from"./object-table-Bunnygjb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BRfEUS3z.js";import"./preload-helper-21pBjwGc.js";import"./Table-Ex05FhFv.js";import"./index-DzFJcvqE.js";import"./Dialog-DSdAEYxC.js";import"./cross-1ilXjfTr.js";import"./svgIconContainer-Bmpr-YG-.js";import"./useBaseUiId-BPzj-rci.js";import"./InternalBackdrop-DnbkkKQH.js";import"./composite-BMEMfwlO.js";import"./index-B1uCCcyj.js";import"./index-D8MmmnXz.js";import"./index-BWrnMFHO.js";import"./useEventCallback-C7hZrsdh.js";import"./SkeletonBar-DX3FY0lK.js";import"./LoadingCell-B3O5ywmq.js";import"./ColumnConfigDialog-BHqTh2X-.js";import"./DraggableList-Cnjnmv33.js";import"./search-CBu-pF0G.js";import"./Input-DW9kemBa.js";import"./useControlled-CGDYKM6L.js";import"./Button-9RAeKDxl.js";import"./small-cross-DLACjrSW.js";import"./ActionButton-Cj1dNVdG.js";import"./Checkbox-DddRnZ8G.js";import"./useValueChanged-DEXfPX0Q.js";import"./CollapsiblePanel-Or1n6xhN.js";import"./MultiColumnSortDialog-Cgnen5BE.js";import"./MenuTrigger-fsa0hbSF.js";import"./CompositeItem-Jmu2r9JC.js";import"./ToolbarRootContext-ClVL2vmD.js";import"./getDisabledMountTransitionStyles-sG9CL-HI.js";import"./getPseudoElementBounds-DfSRht98.js";import"./chevron-down-CdNGoo9Q.js";import"./index-BLPazZJs.js";import"./error-BSLpMKqj.js";import"./BaseCbacBanner-B3mOSYuN.js";import"./makeExternalStore-DALczlz3.js";import"./Tooltip-BokQxeg5.js";import"./PopoverPopup-DbS2DolK.js";import"./debounce-D3LSvrP2.js";import"./useOsdkClient-jc2ng4S0.js";import"./tick-Bz0F0nuW.js";import"./DropdownField-DXOH2Xdp.js";import"./isEqual-BbuKmiSE.js";import"./withOsdkMetrics-Bp-1idm_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
