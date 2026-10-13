import{j as i}from"./iframe-DTTjhdqf.js";import{O as p}from"./object-table-uXbSHh1x.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BB_l_FZ0.js";import"./preload-helper-DLuwwicB.js";import"./Table-C6La8mwf.js";import"./index-C_u0ZD76.js";import"./Dialog-BH3cxv0J.js";import"./cross-Biqxkz0W.js";import"./svgIconContainer-BQTxrAHk.js";import"./useBaseUiId-DAXCLwKK.js";import"./InternalBackdrop-DfoV1fwg.js";import"./composite-DmV5qlv-.js";import"./index-BF1qraTR.js";import"./index-BZqSoOPp.js";import"./index-V7CuNiQt.js";import"./useEventCallback-D0JHLFLo.js";import"./SkeletonBar-CkQh5tX-.js";import"./LoadingCell-DRnc6ZbW.js";import"./ColumnConfigDialog-CrVc4g8l.js";import"./DraggableList-BqAME9U3.js";import"./search-DqqzOunc.js";import"./Input-DIq0Mf7R.js";import"./useControlled-DnFxapfF.js";import"./Button-CVsxv-I0.js";import"./small-cross-q1eH4ZRy.js";import"./ActionButton-Be-L3Hsv.js";import"./Checkbox-DmPGieXK.js";import"./useValueChanged-hEMYJH-e.js";import"./CollapsiblePanel-BLwcFyFu.js";import"./MultiColumnSortDialog-BH_7yvK9.js";import"./MenuTrigger-B2GTQxPn.js";import"./CompositeItem-NevsqKCs.js";import"./ToolbarRootContext-Dcs6ty2M.js";import"./getDisabledMountTransitionStyles-2dTRJBXv.js";import"./getPseudoElementBounds-Ddv_miud.js";import"./chevron-down-DMQn8YNS.js";import"./index-cabLRwho.js";import"./error-9LOJa28H.js";import"./BaseCbacBanner-BYlW8R_8.js";import"./makeExternalStore-FJoYAOnh.js";import"./Tooltip-CYAeZ-OK.js";import"./PopoverPopup-B67nRi_h.js";import"./debounce-DybENE3y.js";import"./useOsdkClient-gEWansJz.js";import"./tick-CjabrPw4.js";import"./DropdownField-7-WH0W2E.js";import"./isEqual-DZ8BxMaa.js";import"./withOsdkMetrics-BVdsAVYy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
