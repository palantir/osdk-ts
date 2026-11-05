import{j as i}from"./iframe-Co9BLc26.js";import{O as p}from"./object-table-CLwi_Yce.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1CEUD_Qa.js";import"./preload-helper-CjIZGyxJ.js";import"./Table-CifDJqyc.js";import"./index-CaXavGNz.js";import"./Dialog-lgpNH8YB.js";import"./cross-CdeazAmw.js";import"./svgIconContainer-XH9sO27g.js";import"./useBaseUiId-B7X46CyE.js";import"./InternalBackdrop-BPl8mach.js";import"./composite-Bs7VpVD-.js";import"./index-83om9hRt.js";import"./index-DuuftHJS.js";import"./index-ft_Pdv6a.js";import"./useEventCallback-C2F-xdBM.js";import"./SkeletonBar-hmw1BSr0.js";import"./LoadingCell-Z-Oxz0e-.js";import"./ColumnConfigDialog-Hrpl0G3s.js";import"./DraggableList-CQJmGSr0.js";import"./search-DQyAxhHi.js";import"./Input-B7An9dFp.js";import"./useControlled-Dm9Z_trU.js";import"./Button-CKhU91Nr.js";import"./small-cross-Clv-yC5T.js";import"./ActionButton-D9teap9J.js";import"./Checkbox-DQJvh9sN.js";import"./useValueChanged-CdK4eivV.js";import"./CollapsiblePanel-GyOfNAAh.js";import"./MultiColumnSortDialog-fQcgWBnJ.js";import"./MenuTrigger-C8J89teT.js";import"./CompositeItem-v285VzZv.js";import"./ToolbarRootContext-CL3VUEMw.js";import"./getDisabledMountTransitionStyles-Bm6XJ5DP.js";import"./getPseudoElementBounds-BE5wQuFp.js";import"./chevron-down-C2RhY0pV.js";import"./index-D2VnSIP3.js";import"./error-DApxBtMc.js";import"./BaseCbacBanner-DCA480_X.js";import"./makeExternalStore-C6cHHmQm.js";import"./Tooltip-YDfZI3Un.js";import"./PopoverPopup-DcMrtKCc.js";import"./debounce-BCFaqdaB.js";import"./useOsdkClient-CASwPT7t.js";import"./tick-OrqCabsC.js";import"./DropdownField-YJ5OIQJX.js";import"./isEqual-LvWzQAZT.js";import"./withOsdkMetrics-D1C2IRuJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
