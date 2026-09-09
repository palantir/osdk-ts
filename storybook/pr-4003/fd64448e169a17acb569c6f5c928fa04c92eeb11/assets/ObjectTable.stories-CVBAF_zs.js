import{j as i}from"./iframe-C5ao1IvQ.js";import{O as p}from"./object-table-DerlADk9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CmeMrzJJ.js";import"./preload-helper-DGRqXtXi.js";import"./Table-2ZURcp6C.js";import"./index-Ceo1TM0H.js";import"./Dialog-DLgxAKbr.js";import"./cross-tL6C68Y8.js";import"./svgIconContainer-XtON82xh.js";import"./useBaseUiId-CnKjhxxS.js";import"./InternalBackdrop-DX4I219N.js";import"./composite-C9s-0UsJ.js";import"./index-BdE4NmrR.js";import"./index-BR9sQfcO.js";import"./index-Dl_5gpp4.js";import"./useEventCallback-DU-6RHtA.js";import"./SkeletonBar-BYTqUIXM.js";import"./LoadingCell-DjsZgBMi.js";import"./ColumnConfigDialog-BbaOeUCq.js";import"./DraggableList-CLh4Tyq3.js";import"./search-Cn03k3ET.js";import"./Input-jSAQ8Oo5.js";import"./useControlled-BT4ixp-u.js";import"./Button-dQ0hHaFn.js";import"./small-cross-CExx4_xi.js";import"./ActionButton-BqCFxwRp.js";import"./Checkbox-CV3uDaMQ.js";import"./useValueChanged-BGuUHdGP.js";import"./CollapsiblePanel-D2FHKx7N.js";import"./MultiColumnSortDialog-CqK_MWJM.js";import"./MenuTrigger-j5B5SFgt.js";import"./CompositeItem-CbSSSK8r.js";import"./ToolbarRootContext-DALSiAmf.js";import"./getDisabledMountTransitionStyles-rgB5HMnj.js";import"./getPseudoElementBounds-ZCf_GkCq.js";import"./chevron-down-CMM_2MNN.js";import"./index-BrUG7ik_.js";import"./error-MOhUoXAM.js";import"./BaseCbacBanner-Dcllmg5_.js";import"./makeExternalStore-CCjQfhEF.js";import"./Tooltip-Dhg69mhl.js";import"./PopoverPopup-CummcjH_.js";import"./debounce-DqZmCH0E.js";import"./useOsdkClient-CZSnsobV.js";import"./tick-Btjr_S2K.js";import"./DropdownField-BNnQ-S--.js";import"./isEqual-c7N1e270.js";import"./withOsdkMetrics-vcpuoudd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
