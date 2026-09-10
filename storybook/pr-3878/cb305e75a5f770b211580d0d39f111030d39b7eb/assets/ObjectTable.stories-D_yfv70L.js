import{j as i}from"./iframe-BXJnohbt.js";import{O as p}from"./object-table-D9NNs3hA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DM2WuzT5.js";import"./preload-helper-tvnGn4jg.js";import"./Table-B97BNwPW.js";import"./index-DJBlipGi.js";import"./Dialog-DAvTCL__.js";import"./cross-Q-_g4ZFQ.js";import"./svgIconContainer-VhJmqTox.js";import"./useBaseUiId-sZ35m2bM.js";import"./InternalBackdrop-vup632p4.js";import"./composite-DdNHLfsp.js";import"./index-DbER6lkg.js";import"./index-DIxniVKs.js";import"./index-BIEsfLi4.js";import"./useEventCallback-BvLSkLRP.js";import"./SkeletonBar-CDbdkFM2.js";import"./LoadingCell-U45hAs7y.js";import"./ColumnConfigDialog-e9SzTM1d.js";import"./DraggableList-yq3PZM49.js";import"./search-Bwx9I6xK.js";import"./Input-DFgR57Ky.js";import"./useControlled--cyQ52Ku.js";import"./Button-k1fX7wnM.js";import"./small-cross-3Wkanwed.js";import"./ActionButton-91Oje2JU.js";import"./Checkbox-DOv66HYU.js";import"./useValueChanged-CXlUDxOW.js";import"./CollapsiblePanel-C0Dtz8qp.js";import"./MultiColumnSortDialog-BhWeALjl.js";import"./MenuTrigger-Ci0xiN-V.js";import"./CompositeItem-DxHmEQaB.js";import"./ToolbarRootContext-DWK2aFvr.js";import"./getDisabledMountTransitionStyles-DbKz3mGY.js";import"./getPseudoElementBounds-CjzqAflM.js";import"./chevron-down-CyQUuZQm.js";import"./index-DCSxP7tL.js";import"./error-Du-8Vb6N.js";import"./BaseCbacBanner-yQghixcO.js";import"./makeExternalStore-Nh0J-rEN.js";import"./Tooltip-fNhv7nQW.js";import"./PopoverPopup-DzsPnqhc.js";import"./debounce-DTy8dIIZ.js";import"./useOsdkClient-y2bMalZp.js";import"./tick-1_WHGxzZ.js";import"./DropdownField--OTUJ18G.js";import"./isEqual-CsfWQL0f.js";import"./withOsdkMetrics-DBlk2yrx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
