import{j as i}from"./iframe-D8AA8tZ5.js";import{O as p}from"./object-table-CUTwSbYW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ctsfPTyJ.js";import"./preload-helper-BH6-9HD1.js";import"./Table-DjXGvDTg.js";import"./index-CukSKf6K.js";import"./Dialog-BSmb9RPZ.js";import"./cross-hRHI0Bet.js";import"./svgIconContainer-M2XD2W51.js";import"./useBaseUiId-DoN4Gm5G.js";import"./InternalBackdrop-Cf7I9NhM.js";import"./composite-BXcEZn4p.js";import"./index-BngeOfUA.js";import"./index-Beb-N8jB.js";import"./index-B03lQs5E.js";import"./useEventCallback-C9xuvvfm.js";import"./SkeletonBar-C33imfSE.js";import"./LoadingCell-CDMvjUON.js";import"./ColumnConfigDialog-X57iMmwI.js";import"./DraggableList-CFcAs5JA.js";import"./search-g_GQHQvF.js";import"./Input-CB7rgA9u.js";import"./useControlled-B43d18Tf.js";import"./Button-DM4RbJ0A.js";import"./small-cross-BPpJlDWz.js";import"./ActionButton-0Dyhpxhu.js";import"./Checkbox-BxtIZFPA.js";import"./useValueChanged-DNIrywMU.js";import"./CollapsiblePanel-BDhpShGL.js";import"./MultiColumnSortDialog-KIiGluw1.js";import"./MenuTrigger-CsnyxN3G.js";import"./CompositeItem-DyTH_2rH.js";import"./ToolbarRootContext-BfpPUsVU.js";import"./getDisabledMountTransitionStyles-tQXpWGZy.js";import"./getPseudoElementBounds-CD0IqPws.js";import"./chevron-down-CUVA2CdW.js";import"./index-DdNWZRPv.js";import"./error-CvnJxzc0.js";import"./BaseCbacBanner-BMTvQ5dO.js";import"./makeExternalStore-CuMj3UXB.js";import"./Tooltip-DaRA4zwN.js";import"./PopoverPopup-B5uG5joS.js";import"./debounce-DEqKAPEE.js";import"./useOsdkClient-F0ZDWn2o.js";import"./tick-vp302nI_.js";import"./DropdownField-BB9zKVZW.js";import"./isEqual-CR-tYD22.js";import"./withOsdkMetrics-BRgNGg7P.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
