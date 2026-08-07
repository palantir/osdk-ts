import{j as i}from"./iframe-C-Y1wjJM.js";import{O as p}from"./object-table-Bx1crVHY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CiUxZCo9.js";import"./preload-helper-b8tFyS_a.js";import"./Table-Bs_L9rAH.js";import"./index-palz5mvc.js";import"./Dialog-BQTFYCzy.js";import"./cross-jR8r3tka.js";import"./svgIconContainer-W7Zl3wV8.js";import"./useBaseUiId-CxDbvFq6.js";import"./InternalBackdrop-CpOky5e4.js";import"./composite-Cckq2u_r.js";import"./index-DKGXCLet.js";import"./index-C8gKOTgg.js";import"./index-DXnvpcJM.js";import"./useEventCallback-OK9Rben9.js";import"./SkeletonBar-BCZp7KCG.js";import"./LoadingCell-CIQYPwGZ.js";import"./ColumnConfigDialog-CKIq9CIu.js";import"./DraggableList-DPDslf4c.js";import"./search-DvmlRYay.js";import"./Input-m5wtd4u0.js";import"./useControlled-DwK6H2wz.js";import"./small-cross-DyaK5Iv6.js";import"./Button-DH9ybcSz.js";import"./ActionButton-Dge8xgOI.js";import"./Checkbox-Ca1WqOlC.js";import"./useValueChanged-OVehMJjp.js";import"./CollapsiblePanel-ficPLDYv.js";import"./MultiColumnSortDialog-CuAkxUhM.js";import"./MenuTrigger-DXU17Ywv.js";import"./CompositeItem-Uzh8PcHE.js";import"./ToolbarRootContext-BChtM849.js";import"./getDisabledMountTransitionStyles-D-PPI8Oc.js";import"./getPseudoElementBounds-CNui0wgJ.js";import"./chevron-down-BLSDTvXr.js";import"./index-CtCSipxk.js";import"./error-CD-IqKVS.js";import"./BaseCbacBanner-CCTpoFcl.js";import"./makeExternalStore-C-qCxaZl.js";import"./Tooltip-BMZxSNr-.js";import"./PopoverPopup-CiuIO-4c.js";import"./Combobox-BBgoyRWg.js";import"./useOsdkClient-iiSC6jpx.js";import"./tick-BY4Wojmn.js";import"./DropdownField-BDm2jd-y.js";import"./withOsdkMetrics-Dst4AoKO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
