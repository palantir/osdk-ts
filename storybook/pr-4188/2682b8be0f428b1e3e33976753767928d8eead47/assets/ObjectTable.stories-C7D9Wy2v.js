import{j as i}from"./iframe-D64bY6TH.js";import{O as p}from"./object-table-C8uAPbFI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCoTpkJF.js";import"./preload-helper-C76Jrfws.js";import"./Table-CrZ7d2aP.js";import"./index-Cc3FeXj1.js";import"./Dialog-Cy3xzR8q.js";import"./cross-D6Cdabtd.js";import"./svgIconContainer-CfgNuiYE.js";import"./useBaseUiId-CFOcLwn4.js";import"./InternalBackdrop-Bc_2TPL1.js";import"./composite-DAqKTlgI.js";import"./index-bp5PTA0n.js";import"./index-B70IpAtL.js";import"./index-DpWxliah.js";import"./useEventCallback-CgjSN3m2.js";import"./SkeletonBar-BlBlU7HK.js";import"./LoadingCell-XrALK-34.js";import"./ColumnConfigDialog-BePDkvcN.js";import"./DraggableList-ByZRTa2k.js";import"./search-Bfu3ziqv.js";import"./Input-QZumNvU1.js";import"./useControlled-CxTqzmL5.js";import"./Button-BmCoWmmM.js";import"./small-cross-CwHEtqN2.js";import"./ActionButton-BVVdRIEF.js";import"./Checkbox-DYiWsfyB.js";import"./useValueChanged-Cfe25gjJ.js";import"./CollapsiblePanel-D4Pc_im2.js";import"./MultiColumnSortDialog-C_xoBBQg.js";import"./MenuTrigger-D3zjlXSJ.js";import"./CompositeItem-9LTTeiMZ.js";import"./ToolbarRootContext-CrHW8pig.js";import"./getDisabledMountTransitionStyles-C0e0B9o7.js";import"./getPseudoElementBounds-C8omZZgw.js";import"./chevron-down-CihExyy-.js";import"./index-Dr8-JDhp.js";import"./error-DEgvCPew.js";import"./BaseCbacBanner-DEptZPu_.js";import"./makeExternalStore-DhnEC1sn.js";import"./Tooltip-By2rP-Yc.js";import"./PopoverPopup-Be8aQKMg.js";import"./debounce-Cg8_SxcC.js";import"./useOsdkClient-IPsSAxyW.js";import"./tick-foI34yl5.js";import"./DropdownField-BfpsV4IR.js";import"./isEqual-CQXYOo64.js";import"./withOsdkMetrics-Dszg8kI0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
