import{j as i}from"./iframe-KzP54st8.js";import{O as p}from"./object-table-o0JZeDi0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CsgRnHjW.js";import"./preload-helper-CZ0_peag.js";import"./Table-BMQRg0Zc.js";import"./index-B5nqBBWp.js";import"./Dialog-DFr5f9PO.js";import"./cross-lnMk7dXt.js";import"./svgIconContainer-B_IEjFSj.js";import"./useBaseUiId-BA1-4W3F.js";import"./InternalBackdrop-CzWxzLnJ.js";import"./composite-CfrzbkGj.js";import"./index-Br5P7C2V.js";import"./index-BMXD2udq.js";import"./index-BQoDxnvf.js";import"./useEventCallback-CHYc0JHW.js";import"./SkeletonBar-DFXSW7YC.js";import"./LoadingCell-C1IZYySw.js";import"./ColumnConfigDialog-BZ3zVyDl.js";import"./DraggableList-DYQUzo9M.js";import"./search-Cb-crZIr.js";import"./Input-C6qaftyN.js";import"./useControlled-DYaDm29f.js";import"./Button-DwGnaIDL.js";import"./small-cross-CSHoeFRw.js";import"./ActionButton-DBQ-TeBZ.js";import"./Checkbox-sEbby4bB.js";import"./useValueChanged-JwsuVPmt.js";import"./CollapsiblePanel-CYOujYEK.js";import"./MultiColumnSortDialog-CM3CueLO.js";import"./MenuTrigger-jL7t-XBm.js";import"./CompositeItem-5AIUt4bR.js";import"./ToolbarRootContext-xfunMS_N.js";import"./getDisabledMountTransitionStyles-D7SWM4VP.js";import"./getPseudoElementBounds-C-w8h5Fq.js";import"./chevron-down-C83fmB_G.js";import"./index-BRJV35Oa.js";import"./error-CnxGfdHo.js";import"./BaseCbacBanner-DHNG911r.js";import"./makeExternalStore-DSq9r9yQ.js";import"./Tooltip-BCepzJDL.js";import"./PopoverPopup-BCLXp0oS.js";import"./debounce-BGthoR0W.js";import"./useOsdkClient-DlRniYh9.js";import"./tick-DIqBuVUT.js";import"./DropdownField-DBmNVyJA.js";import"./isEqual-CPVRUFPO.js";import"./withOsdkMetrics-DzdVKn4L.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
