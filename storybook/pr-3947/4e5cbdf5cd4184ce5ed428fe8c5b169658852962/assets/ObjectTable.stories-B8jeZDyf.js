import{j as i}from"./iframe-B9vRr-8o.js";import{O as p}from"./object-table-Cy9_ddQq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-76ofUwl9.js";import"./preload-helper-CT6yiVJK.js";import"./Table-BUC41EyK.js";import"./index-Db6wxNSm.js";import"./Dialog-DrfWv6lO.js";import"./cross-DS9XOep9.js";import"./svgIconContainer-jTmjY-5C.js";import"./useBaseUiId-Zy-hPVme.js";import"./InternalBackdrop-Dkt-LU98.js";import"./composite-D-Ig3PPA.js";import"./index-BqLTNrL3.js";import"./index-BP6meDIf.js";import"./index-DiOfrt9y.js";import"./useEventCallback-Dnwjatgq.js";import"./SkeletonBar-DDQ6bK0h.js";import"./LoadingCell-h6-IYD-k.js";import"./ColumnConfigDialog-DSyqhsd5.js";import"./DraggableList-BEY5F6_e.js";import"./search-BLFbd71b.js";import"./Input-49lOIosv.js";import"./useControlled-Czmg4_Mq.js";import"./Button-DInSh6Mg.js";import"./small-cross-g5g4iWLv.js";import"./ActionButton-VuwZ2TlI.js";import"./Checkbox-DD1_NRcm.js";import"./useValueChanged-CZWNgrSk.js";import"./CollapsiblePanel-BYu6tsP9.js";import"./MultiColumnSortDialog-C54yM2eA.js";import"./MenuTrigger-k50_Svx1.js";import"./CompositeItem-CAhsvlmM.js";import"./ToolbarRootContext-BnF1ucj1.js";import"./getDisabledMountTransitionStyles-DR1DqNS1.js";import"./getPseudoElementBounds-B9b1zlvs.js";import"./chevron-down-KfZfPmTG.js";import"./index-DmmkcNZh.js";import"./error-DU5bvt7m.js";import"./BaseCbacBanner-BIhbpkTr.js";import"./makeExternalStore-CO4PrvZd.js";import"./Tooltip-Iu1ebRAa.js";import"./PopoverPopup-1FDqfr6m.js";import"./debounce-CTdyZ7c7.js";import"./useOsdkClient-XUvdpQCP.js";import"./tick-HHcjPpdd.js";import"./DropdownField-D-lyti30.js";import"./isEqual-BHuMrP_U.js";import"./withOsdkMetrics-BZu7xMYv.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
