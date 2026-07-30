import{j as i}from"./iframe-Dmr99acc.js";import{O as p}from"./object-table-BdOcZAFL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-kiDN6BND.js";import"./preload-helper-C3fvUQx7.js";import"./Table-QilWXT60.js";import"./index-BrNfcA8o.js";import"./Dialog-_tm9sxGV.js";import"./cross-DPRer7Lc.js";import"./svgIconContainer-i6wDQlBQ.js";import"./useBaseUiId-CZ5UhgWP.js";import"./InternalBackdrop-BZm03awu.js";import"./composite-CTX0S4gD.js";import"./index-hysLT7S5.js";import"./index-D0cDwrQE.js";import"./index-TY9AeqMQ.js";import"./useEventCallback-C7IUT-60.js";import"./SkeletonBar-SINPGVDW.js";import"./LoadingCell--W3bLZb6.js";import"./ColumnConfigDialog-ChX7-k3I.js";import"./DraggableList-BBA9abwK.js";import"./search-CM8W8GMN.js";import"./Input-D7SXFGM5.js";import"./useControlled-MBfgJYZe.js";import"./isEqual-C_SZptGm.js";import"./isObject-B5YNbtiP.js";import"./Button-DUHV64rf.js";import"./ActionButton-C9gLbKzn.js";import"./Checkbox-CCFocOFJ.js";import"./useValueChanged-4X9USCWk.js";import"./CollapsiblePanel-DnJ1tKg0.js";import"./MultiColumnSortDialog-NxwHSZO-.js";import"./MenuTrigger-Yp1PN_ku.js";import"./CompositeItem-CzBeefKz.js";import"./ToolbarRootContext-v-w7YnHp.js";import"./getDisabledMountTransitionStyles-5La8Kryu.js";import"./getPseudoElementBounds-ZhV2I7IE.js";import"./chevron-down-CGjekJXx.js";import"./index-C5lGNItV.js";import"./error-CUTSYbW5.js";import"./BaseCbacBanner-BcSbcgq-.js";import"./makeExternalStore-HyFiibfZ.js";import"./Tooltip-D8v5HrC1.js";import"./PopoverPopup-D-qRdYYc.js";import"./toNumber-DMOIbN6B.js";import"./useOsdkClient-Bxv9nwMb.js";import"./tick-BAMX-Ke2.js";import"./DropdownField-BDfCSa-4.js";import"./withOsdkMetrics-DSCZunsU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
