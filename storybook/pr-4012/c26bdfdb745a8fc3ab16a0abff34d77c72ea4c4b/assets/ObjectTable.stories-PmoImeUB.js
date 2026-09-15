import{j as i}from"./iframe-D6uAV5TU.js";import{O as p}from"./object-table-BwnIPp8Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DTjTuvOC.js";import"./preload-helper-DgVxICfb.js";import"./Table-CRx6JA84.js";import"./index-CY-pWkIE.js";import"./Dialog-CfZC9tap.js";import"./cross-C1qbDIAe.js";import"./svgIconContainer-to51jCpQ.js";import"./useBaseUiId-Cm0jnEPf.js";import"./InternalBackdrop-NL9DIBlB.js";import"./composite-BEzxj37g.js";import"./index-bpYghXGo.js";import"./index-JG_tkU8g.js";import"./index-ByXvVmI6.js";import"./useEventCallback-DVHh9L01.js";import"./SkeletonBar-DKDnh7uJ.js";import"./LoadingCell-CDILZwUZ.js";import"./ColumnConfigDialog-CKly1pAJ.js";import"./DraggableList-siYf0BWh.js";import"./search-BkhC58qY.js";import"./Input-DgviHqP4.js";import"./useControlled-CNCN21-B.js";import"./Button-D1LcAXjL.js";import"./small-cross-BlyS8cCD.js";import"./ActionButton-Dm6zTNT-.js";import"./Checkbox-DA-cZczo.js";import"./useValueChanged-C6SY9C02.js";import"./CollapsiblePanel-DQG7EOif.js";import"./MultiColumnSortDialog-Dkd3iv5n.js";import"./MenuTrigger-oX_QBijd.js";import"./CompositeItem-BovdAW9J.js";import"./ToolbarRootContext-Cj-ulQf0.js";import"./getDisabledMountTransitionStyles-C4AOWP0V.js";import"./getPseudoElementBounds-CI3G1dnv.js";import"./chevron-down-y6Dx4H3i.js";import"./index-CF_buGa8.js";import"./error-AQL_lZl-.js";import"./BaseCbacBanner-DRF4wjkH.js";import"./makeExternalStore-DWEUTaD3.js";import"./Tooltip-BDskuAWO.js";import"./PopoverPopup-CoRD32O0.js";import"./debounce-Cf7XEzCl.js";import"./useOsdkClient-o-471cIP.js";import"./tick-CJVi8Uyj.js";import"./DropdownField-Dza8gOA9.js";import"./isEqual-N7cPq6Z7.js";import"./withOsdkMetrics-C88Xzccf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
