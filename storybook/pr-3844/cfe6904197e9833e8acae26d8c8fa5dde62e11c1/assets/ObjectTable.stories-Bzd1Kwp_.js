import{j as i}from"./iframe-BmIumiFy.js";import{O as p}from"./object-table-CvOpDczA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-YhTQwf3A.js";import"./preload-helper-DOudssxF.js";import"./Table-BhjAHP64.js";import"./index-COtMTDwh.js";import"./Dialog-uE21v_ZQ.js";import"./cross-DwaGakXk.js";import"./svgIconContainer-zzO9ThP2.js";import"./useBaseUiId-u6D5SNaO.js";import"./InternalBackdrop-B9dKZpjj.js";import"./composite-xXwZ5piC.js";import"./index-C3Iv1KGN.js";import"./index-sxuF88AO.js";import"./index-DUFG2h40.js";import"./useEventCallback-B8NSSpYv.js";import"./SkeletonBar-BovQdxso.js";import"./LoadingCell-D0i64q0P.js";import"./ColumnConfigDialog-CtNE-3Ou.js";import"./DraggableList-BUJMmWzV.js";import"./search-B4tx0NX2.js";import"./Input-DMQEWRf3.js";import"./useControlled-BF-5Gu-Y.js";import"./isEqual-DuTTYvzw.js";import"./isObject-DrqpD2n2.js";import"./Button-BMFo_q3G.js";import"./ActionButton-DrJ6EZ8a.js";import"./Checkbox-aRpirLZ3.js";import"./useValueChanged-Dc-3HeWJ.js";import"./CollapsiblePanel-DJE96aKA.js";import"./MultiColumnSortDialog-Bgfe-LZL.js";import"./MenuTrigger-7DDfuo0C.js";import"./CompositeItem-CEPi8VM6.js";import"./ToolbarRootContext-ujFBXNzR.js";import"./getDisabledMountTransitionStyles-BfNZz4o-.js";import"./getPseudoElementBounds-DYdOL6QI.js";import"./chevron-down-SL5FndRp.js";import"./index-0qJVcbl0.js";import"./error-BsBgpzWK.js";import"./BaseCbacBanner-we2_u0B0.js";import"./makeExternalStore-B__ysOOH.js";import"./Tooltip-CZ7OA9Hx.js";import"./PopoverPopup-CItoAxrH.js";import"./toNumber-B5ytWKky.js";import"./useOsdkClient-DpUIXbJs.js";import"./tick-DZ-GdA6q.js";import"./DropdownField-BkYVcv5s.js";import"./withOsdkMetrics-aOoiWXTE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
