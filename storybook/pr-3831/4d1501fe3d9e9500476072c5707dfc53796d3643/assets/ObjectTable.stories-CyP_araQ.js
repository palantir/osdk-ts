import{j as i}from"./iframe-B_zElg-B.js";import{O as p}from"./object-table-CiudyEEV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DOrAbwag.js";import"./preload-helper-DRQoOE0T.js";import"./Table-YcuLBa9-.js";import"./index-Y0pbVALd.js";import"./Dialog-eqoCymUU.js";import"./cross-AjEzGA8V.js";import"./svgIconContainer-CUDghfka.js";import"./useBaseUiId-C39aF9XL.js";import"./InternalBackdrop-DhtYgC5u.js";import"./composite-0kNuzYvp.js";import"./index-Cixqsfx9.js";import"./index-C6L5_3LK.js";import"./index-DvYME2IR.js";import"./useEventCallback-Ca6KgphA.js";import"./SkeletonBar-DlZLi0bg.js";import"./LoadingCell-VpeWOucW.js";import"./ColumnConfigDialog-sn6CtPlU.js";import"./DraggableList-Bd644Fjq.js";import"./search-D4GHHRcy.js";import"./Input-CYBD-BHU.js";import"./useControlled-6dtWCE0B.js";import"./isEqual-D8eqqu_U.js";import"./isObject-YUZI-5HX.js";import"./Button-Ct7hm6nC.js";import"./ActionButton-DBW_GHnB.js";import"./Checkbox-D2EdTGWa.js";import"./useValueChanged-44oYbNFp.js";import"./CollapsiblePanel-CQKYGtyy.js";import"./MultiColumnSortDialog-47xFqf_s.js";import"./MenuTrigger-CjbOgME4.js";import"./CompositeItem-BVhfnvWC.js";import"./ToolbarRootContext-Cy1n_T1N.js";import"./getDisabledMountTransitionStyles-BT1usa7w.js";import"./getPseudoElementBounds-BbRYHzbr.js";import"./chevron-down--uAY4t4Y.js";import"./index-Cnqy7EOL.js";import"./error-Ckw62m6f.js";import"./BaseCbacBanner-D-fmKJvW.js";import"./makeExternalStore-B-Aw5Aa5.js";import"./Tooltip-CDziBIY_.js";import"./PopoverPopup-dlk6jeVL.js";import"./toNumber-CdMeurHh.js";import"./useOsdkClient-BfxQYBoI.js";import"./tick-URoWB_Nt.js";import"./DropdownField-Dp86C8Tw.js";import"./withOsdkMetrics-BBrkQJAI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
