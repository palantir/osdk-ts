import{j as i}from"./iframe-CUIuiQ8M.js";import{O as p}from"./object-table-DcpRmsy_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CjGj8iV8.js";import"./preload-helper-w0MMDoBI.js";import"./Table-BcVAwvAP.js";import"./index-B5rq4E8c.js";import"./Dialog-lzK4Gi-J.js";import"./cross-BEDlXMDX.js";import"./svgIconContainer-XQGxfFa5.js";import"./useBaseUiId-CO_Scg4B.js";import"./InternalBackdrop-Y4Nj-4X1.js";import"./composite-CfWLpG35.js";import"./index-BXDM3eUI.js";import"./index-nHMpUj1A.js";import"./index-DkpbIJUD.js";import"./useEventCallback-C_grctXi.js";import"./SkeletonBar-CwNsNlh8.js";import"./LoadingCell-KsTWRBcy.js";import"./ColumnConfigDialog-BvqKgg-q.js";import"./DraggableList-CKtkyqle.js";import"./search-DuRjWaqd.js";import"./Input-CUX61x5u.js";import"./useControlled-AW4odFH0.js";import"./Button-BsH4UFjg.js";import"./small-cross-DaAqxcp4.js";import"./ActionButton-DtPhv0MM.js";import"./Checkbox-CDbOUomX.js";import"./useValueChanged-CL6SvqY3.js";import"./CollapsiblePanel-CUDS3fRJ.js";import"./MultiColumnSortDialog-DT-P02CM.js";import"./MenuTrigger-BsuBD8Wj.js";import"./CompositeItem-DqTHESiL.js";import"./ToolbarRootContext-mQ2qjFjd.js";import"./getDisabledMountTransitionStyles-vKVZiAas.js";import"./getPseudoElementBounds-QgHfLMx-.js";import"./chevron-down-BPe3l6Fo.js";import"./index-BupjIogH.js";import"./error-BGt6yMaY.js";import"./BaseCbacBanner-BcfsTXre.js";import"./makeExternalStore-elmJ7ql4.js";import"./Tooltip-DLKdaeP_.js";import"./PopoverPopup-BR39rcA2.js";import"./debounce-COj0D1HK.js";import"./useOsdkClient-B4O694Ba.js";import"./tick-Clfa24KY.js";import"./DropdownField-CUeKvgWP.js";import"./isEqual-l3r_0yQ_.js";import"./withOsdkMetrics-CQMJUMD-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
