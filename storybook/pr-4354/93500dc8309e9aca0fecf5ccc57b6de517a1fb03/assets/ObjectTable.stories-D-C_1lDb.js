import{j as i}from"./iframe-BIP88-50.js";import{O as p}from"./object-table-CNMhMkmH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DIpCLqC9.js";import"./preload-helper-CJkHOWC7.js";import"./Table-CHLtOT8z.js";import"./index-CGkdPPI9.js";import"./Dialog-C0UW6gOW.js";import"./cross-qB-EknTM.js";import"./svgIconContainer-Dz6akIgn.js";import"./useBaseUiId-Cj-jJj6K.js";import"./InternalBackdrop-CftIyHL4.js";import"./composite-BpLHrmIE.js";import"./index-KnvC-9LR.js";import"./index-BrS4cRkH.js";import"./index-B1OlRn7v.js";import"./useEventCallback-BrR1OuJb.js";import"./SkeletonBar-DoCTJFkz.js";import"./LoadingCell-CNzaDi2p.js";import"./ColumnConfigDialog-BLwOeNew.js";import"./DraggableList-DlqvUYF8.js";import"./search-DgaGEvbD.js";import"./Input-DYBooigU.js";import"./useControlled-fuVP_NbG.js";import"./Button-CjK6G0Gi.js";import"./small-cross-BznyWel9.js";import"./ActionButton-DxA4l1EI.js";import"./Checkbox-BMCER6Bk.js";import"./useValueChanged-COmQAw9I.js";import"./CollapsiblePanel-snv-WSy_.js";import"./MultiColumnSortDialog-B5F0EWQk.js";import"./MenuTrigger-nre5v0iQ.js";import"./CompositeItem-CVTunDpb.js";import"./ToolbarRootContext-CRygSzuk.js";import"./getDisabledMountTransitionStyles-DRbULTDE.js";import"./getPseudoElementBounds-DSD11-NM.js";import"./chevron-down-BX7qMt__.js";import"./index-D59kjkiP.js";import"./error-y3-k7YV5.js";import"./BaseCbacBanner-ixNx6GvE.js";import"./makeExternalStore-bK2uAKO3.js";import"./Tooltip-CWDNHqVt.js";import"./isObject-B6TUXASY.js";import"./debounce-DDX1lyuq.js";import"./useOsdkClient-DPupQZW9.js";import"./tick-IXb8pkgs.js";import"./DropdownField-CpHmWmlY.js";import"./isEqual-xme5et3Y.js";import"./_baseIsEqual-OPkKOK_R.js";import"./withOsdkMetrics-YF4jnVsf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
