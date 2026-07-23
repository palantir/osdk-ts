import{j as i}from"./iframe-D_9TmTWV.js";import{O as p}from"./object-table-BH56hF0K.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BODTU3d-.js";import"./preload-helper-DJH2govB.js";import"./Table-B68MTNrC.js";import"./index-CZmlMw1G.js";import"./Dialog-ovUcxfde.js";import"./cross-LTJbD_sI.js";import"./svgIconContainer-e2zn3xKA.js";import"./useBaseUiId-BDKr1Znm.js";import"./InternalBackdrop-CXbB8HCu.js";import"./composite-DvHiPVn1.js";import"./index-ilaZ_cq1.js";import"./index-Z3aTWHLe.js";import"./index-XIDOmxkt.js";import"./useEventCallback-CA02TTP5.js";import"./SkeletonBar-Kv4R8Wuu.js";import"./LoadingCell-C5sCVBRd.js";import"./ColumnConfigDialog-DU8PisTj.js";import"./DraggableList-dh32i-E0.js";import"./search-BiwpNc5U.js";import"./Input-BAv6Vl12.js";import"./useControlled-DS9eNVze.js";import"./isEqual-AkuwC8U-.js";import"./isObject-KAt_jdB7.js";import"./Button-Dubu6PwJ.js";import"./ActionButton-BI9cbJew.js";import"./Checkbox-DhaX5QKg.js";import"./useValueChanged-B6cvE1x9.js";import"./CollapsiblePanel-D9CQ9Mvu.js";import"./MultiColumnSortDialog-CrnJvSH7.js";import"./MenuTrigger-Bic_hcSB.js";import"./CompositeItem-CcExbvwI.js";import"./ToolbarRootContext-CNcIlT0m.js";import"./getDisabledMountTransitionStyles-Dbdb4VgA.js";import"./getPseudoElementBounds-9E9W5mWV.js";import"./chevron-down-BZXSDnra.js";import"./index-boWbyro0.js";import"./error-BMNLqSay.js";import"./BaseCbacBanner-Wf7NqT0e.js";import"./makeExternalStore-CnxWgFmk.js";import"./Tooltip-vrZDtlVf.js";import"./PopoverPopup-SCuH-Pti.js";import"./toNumber-C8lcaAqG.js";import"./useOsdkClient-DXp2jXVT.js";import"./tick-CUayK5we.js";import"./DropdownField-CU-01fvu.js";import"./withOsdkMetrics-DhbE-ALn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
