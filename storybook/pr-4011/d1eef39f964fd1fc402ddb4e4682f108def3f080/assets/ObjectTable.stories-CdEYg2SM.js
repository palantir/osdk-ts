import{j as i}from"./iframe-CTo_Vzji.js";import{O as p}from"./object-table-DVHVRi7P.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ig-15DpD.js";import"./preload-helper-DdmOa013.js";import"./Table-Cz1dp7qS.js";import"./index-Db0bQB9_.js";import"./Dialog-B3mADZPJ.js";import"./cross-CFrNYW1-.js";import"./svgIconContainer-BrN7Rq3k.js";import"./useBaseUiId-DRC8ORV_.js";import"./InternalBackdrop-B6_Ng-lQ.js";import"./composite-hvvr6RcJ.js";import"./index-Dn1u0MHw.js";import"./index-BIdADT_u.js";import"./index-1hzAV9CV.js";import"./useEventCallback-B2VUA3Ib.js";import"./SkeletonBar-BWauSf1D.js";import"./LoadingCell-BeAA-vyA.js";import"./ColumnConfigDialog-iH6rL_aA.js";import"./DraggableList-DpYGw85c.js";import"./search-DYJawdx1.js";import"./Input-EzzRC5FT.js";import"./useControlled-BoNXrNA6.js";import"./Button-C3RHmX63.js";import"./small-cross-Bujce-By.js";import"./ActionButton-3lyzIepJ.js";import"./Checkbox-CDyO9YtU.js";import"./useValueChanged-ChX7As4m.js";import"./CollapsiblePanel-Bm45zRZW.js";import"./MultiColumnSortDialog-Bp4rNbQX.js";import"./MenuTrigger-DDwLPAM_.js";import"./CompositeItem-DzuUOttU.js";import"./ToolbarRootContext-Dbn3i0X6.js";import"./getDisabledMountTransitionStyles-DJOlxGxJ.js";import"./getPseudoElementBounds-B742Mdks.js";import"./chevron-down-DsgPE9Kl.js";import"./index-q7czgvlb.js";import"./error-CDiUdq4p.js";import"./BaseCbacBanner-DMNhQz7R.js";import"./makeExternalStore-MWbMkrip.js";import"./Tooltip-BYL374NH.js";import"./PopoverPopup-ChB2ddvw.js";import"./debounce-B89wugMt.js";import"./useOsdkClient-B9u8vjAo.js";import"./tick-YWI0wct4.js";import"./DropdownField-ac3lkk8_.js";import"./isEqual-D6XBVD8m.js";import"./withOsdkMetrics-CosmvfGt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
