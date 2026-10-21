import{j as i}from"./iframe-Z5B59nHv.js";import{O as p}from"./object-table-OfsX1fbr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4n7FY0i.js";import"./preload-helper-B3LVR9LX.js";import"./Table-Bzx7BvY8.js";import"./index-cU0AVaQf.js";import"./Dialog-Bj0impzk.js";import"./cross-Cwrmhou9.js";import"./svgIconContainer-B_Sf7Uoj.js";import"./useBaseUiId-DN7B2pea.js";import"./InternalBackdrop-CT8QE5xx.js";import"./composite-Dna_oWev.js";import"./index-Csf5-H5s.js";import"./index-CwXTPSTU.js";import"./index-D5bko_OX.js";import"./useEventCallback-BOlmFfw4.js";import"./SkeletonBar-CDx-ZXnH.js";import"./LoadingCell-DJfiyKpX.js";import"./ColumnConfigDialog-Be0hyoWQ.js";import"./DraggableList-CRkefje3.js";import"./search-CH0ng29D.js";import"./Input-Bu230jB_.js";import"./useControlled-BQV59h-A.js";import"./Button-C8Wmmv8l.js";import"./small-cross-CTkkul48.js";import"./ActionButton-CQFbOgwD.js";import"./Checkbox-0LwzsijX.js";import"./useValueChanged-CM_W6cBg.js";import"./CollapsiblePanel-CkovPae2.js";import"./MultiColumnSortDialog-BQJBi4i8.js";import"./MenuTrigger-ec0LmwbP.js";import"./CompositeItem-jpYgtvmQ.js";import"./ToolbarRootContext-Bs124fL_.js";import"./getDisabledMountTransitionStyles-Ca4we0Dc.js";import"./getPseudoElementBounds-CnpaCKEL.js";import"./chevron-down-nfT9szK9.js";import"./index-DMp4QYwj.js";import"./error-DocjYaCq.js";import"./BaseCbacBanner-4T2a86qp.js";import"./makeExternalStore-rak7eNYQ.js";import"./Tooltip-Cs-Vtp60.js";import"./PopoverPopup-CC0rhnhV.js";import"./debounce-D-eTCzZU.js";import"./useOsdkClient-XgUCld_F.js";import"./tick-C0PU8pW9.js";import"./DropdownField-CZiGi09a.js";import"./isEqual-C2OAKHDP.js";import"./withOsdkMetrics-DB3Tu-8Y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
