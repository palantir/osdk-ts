import{j as i}from"./iframe-BdamuBSW.js";import{O as p}from"./object-table-Dd8F9MJb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DTS1HjrJ.js";import"./preload-helper-DZ9xmEaG.js";import"./Table-BwFliMap.js";import"./index-CzCGUNDu.js";import"./Dialog-BWtAf7yb.js";import"./cross-CLaBWSw6.js";import"./svgIconContainer-CGhkkD0s.js";import"./useBaseUiId-CrCJEUlz.js";import"./InternalBackdrop-CO4Xg4x0.js";import"./composite-Bvo9YAgy.js";import"./index-B5Cmbtjp.js";import"./index-BCh8Pu1q.js";import"./index-FY0Bg0-m.js";import"./useEventCallback-CECLtwpw.js";import"./SkeletonBar-CWjKtAmo.js";import"./LoadingCell-Dx7_fSTs.js";import"./ColumnConfigDialog-CxxEVPe2.js";import"./DraggableList-jE3NYPTZ.js";import"./search-XGjCTgti.js";import"./Input-vUwBhrLX.js";import"./useControlled-D5iM1jy5.js";import"./Button-NcM8hPFP.js";import"./small-cross-ZuHva1xM.js";import"./ActionButton-CcP9PBD9.js";import"./Checkbox-BGJIpafi.js";import"./useValueChanged-DGZ0cM7F.js";import"./CollapsiblePanel-pxD-JLDi.js";import"./MultiColumnSortDialog-Voex3n1E.js";import"./MenuTrigger-BtepaWQu.js";import"./CompositeItem-BuuNoifa.js";import"./ToolbarRootContext-VKjIBJTb.js";import"./getDisabledMountTransitionStyles-BFJq39Vl.js";import"./getPseudoElementBounds-CjHvqmd5.js";import"./chevron-down-BM9a4BBi.js";import"./index-Djo-XrZC.js";import"./error-DKUZpZvu.js";import"./BaseCbacBanner-DPvaJU3n.js";import"./makeExternalStore-DmdygOVW.js";import"./Tooltip-Cv_FqXfC.js";import"./PopoverPopup-DhOu8Gke.js";import"./debounce-2PBdA7WY.js";import"./useOsdkClient-BwzpfxSK.js";import"./tick-BEUPv9hK.js";import"./DropdownField-CK-WBLfS.js";import"./isEqual-CehFsAyc.js";import"./withOsdkMetrics-CSNwlJ-x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
