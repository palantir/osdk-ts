import{j as i}from"./iframe-CvsBQ7Bv.js";import{O as p}from"./object-table-Bva39EkY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DGjbc6Z1.js";import"./preload-helper-DlzqvSUq.js";import"./Table-Bk_Xiy1O.js";import"./index-zqvYW4SU.js";import"./Dialog-Dj7AJSDy.js";import"./cross-BBfoUyvH.js";import"./svgIconContainer-BICOG3-Z.js";import"./useBaseUiId-DJie0QLa.js";import"./InternalBackdrop-CgJA0r_O.js";import"./composite-tQAENqA9.js";import"./index-DWqMtX_5.js";import"./index-pktwAYcd.js";import"./index-CgcrBJpo.js";import"./useEventCallback-ama7zC7l.js";import"./SkeletonBar-BDtygrLN.js";import"./LoadingCell-DiJJdD0Z.js";import"./ColumnConfigDialog-DVeFw9Fz.js";import"./DraggableList--QPMrdfM.js";import"./search-DMySM0K3.js";import"./Input-CyAWOOQt.js";import"./useControlled-BMRWc9HY.js";import"./Button--C8rvOfU.js";import"./small-cross-CJHhyVum.js";import"./ActionButton-B4IV8DDr.js";import"./Checkbox-PtMaFLOi.js";import"./useValueChanged-MiAVaZ_u.js";import"./CollapsiblePanel-C7BP8ZD3.js";import"./MultiColumnSortDialog-DpCfKP_b.js";import"./MenuTrigger-D72mL9sH.js";import"./CompositeItem-CgFodWwZ.js";import"./ToolbarRootContext-CUoJwkVG.js";import"./getDisabledMountTransitionStyles-BYd2AM5Z.js";import"./getPseudoElementBounds-C1BIyYMV.js";import"./chevron-down-pfssoNn9.js";import"./index-CGIOcGM5.js";import"./error-D7W27UGH.js";import"./BaseCbacBanner-BS-G6SnX.js";import"./makeExternalStore-CoY10B_2.js";import"./Tooltip-BEj0KtXz.js";import"./PopoverPopup-ICSjS-3E.js";import"./debounce-B8ADmp8k.js";import"./useOsdkClient-Gme28oz4.js";import"./tick-Cx1M9Q22.js";import"./DropdownField-Dkea7y5N.js";import"./isEqual-zwoTdbaf.js";import"./withOsdkMetrics-B_Zhux1x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
