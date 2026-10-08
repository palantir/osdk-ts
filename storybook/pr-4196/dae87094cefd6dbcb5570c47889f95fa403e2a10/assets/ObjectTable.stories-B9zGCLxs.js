import{j as i}from"./iframe-BZFzj4I7.js";import{O as p}from"./object-table-CaOanD_r.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C6tRiJTW.js";import"./preload-helper-D4VtoqvU.js";import"./Table-D69G7tsa.js";import"./index-C9BOu-GC.js";import"./Dialog-BmAlFTcT.js";import"./cross-8Ktod3hp.js";import"./svgIconContainer-BgU1NuNe.js";import"./useBaseUiId-CynpPIak.js";import"./InternalBackdrop-CG54fetj.js";import"./composite-DOYm4spg.js";import"./index-CRbxC94q.js";import"./index-ZJ1zgTXq.js";import"./index-Bk8XfLzk.js";import"./useEventCallback-BCUiY9N8.js";import"./SkeletonBar-bkE9C5Ws.js";import"./LoadingCell-gLcFJ4DB.js";import"./ColumnConfigDialog-BiLqNN8I.js";import"./DraggableList-kJQ0KOz4.js";import"./search-CtmR8qHz.js";import"./Input-CNdZYHeG.js";import"./useControlled-ed2KW_CI.js";import"./Button-BADC2rqt.js";import"./small-cross-BAxJVgQG.js";import"./ActionButton-Dex_JIm4.js";import"./Checkbox-JZjDJOin.js";import"./useValueChanged-CuuuHRpO.js";import"./CollapsiblePanel-CGkaJLnK.js";import"./MultiColumnSortDialog-D4GOkhgz.js";import"./MenuTrigger-Cc6fQlb_.js";import"./CompositeItem-V8rmNgwr.js";import"./ToolbarRootContext-BpRFBWvV.js";import"./getDisabledMountTransitionStyles-Ch4NQ1Hm.js";import"./getPseudoElementBounds-DpgopoMm.js";import"./chevron-down-B4Kaehlj.js";import"./index-dwA92LAO.js";import"./error-DXjyDcZg.js";import"./BaseCbacBanner-DJu3ij19.js";import"./makeExternalStore-CONCRK9u.js";import"./Tooltip-kv_sqmri.js";import"./PopoverPopup-BZRml7yC.js";import"./debounce-BbAGx_Mx.js";import"./useOsdkClient-C4NEBTtT.js";import"./tick-CiH7fOUu.js";import"./DropdownField-DUmhDtNd.js";import"./isEqual-CYFWBjNz.js";import"./withOsdkMetrics-LbVHGHvS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
