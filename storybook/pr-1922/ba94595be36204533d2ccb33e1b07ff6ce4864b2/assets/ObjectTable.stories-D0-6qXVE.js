import{j as i}from"./iframe-Jx-ulL5C.js";import{O as p}from"./object-table-q3UrjN6F.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B8VkHQAl.js";import"./preload-helper-DQOtA23C.js";import"./Table-DZbRuhsF.js";import"./index-DbcvcRjy.js";import"./Dialog-BRvHhEdd.js";import"./cross-BM4LNdzl.js";import"./svgIconContainer-DA5CXbWv.js";import"./useBaseUiId-DlGP4CyH.js";import"./InternalBackdrop-6LUyu52Z.js";import"./composite-Ci3x3D-j.js";import"./index-C-0GQm9S.js";import"./index-CGN3jVUK.js";import"./index-CdQh5CWa.js";import"./useEventCallback-BBmWvDTH.js";import"./SkeletonBar-BXzTGbHS.js";import"./LoadingCell-qf1fOl3j.js";import"./ColumnConfigDialog-BmBxaPQ0.js";import"./DraggableList-BD5HhNtg.js";import"./search-DKR4hHlP.js";import"./Input-xfSfvcdJ.js";import"./useControlled-DTXqp68j.js";import"./isEqual-nIAJKi_O.js";import"./isObject-BplzMpX4.js";import"./Button-BgbvTS34.js";import"./ActionButton-URjGw98Y.js";import"./Checkbox-D9CUAKPQ.js";import"./useValueChanged-MGFURfEB.js";import"./CollapsiblePanel-CvwhhdJE.js";import"./MultiColumnSortDialog-BzisExGf.js";import"./MenuTrigger-CsTa46EY.js";import"./CompositeItem-C-U5_30J.js";import"./ToolbarRootContext-DjVkVQIx.js";import"./getDisabledMountTransitionStyles-o05RofWl.js";import"./getPseudoElementBounds-DKJ-1ie9.js";import"./chevron-down-DmKonuNt.js";import"./index-A1POwUcc.js";import"./error-Bqu3bVtd.js";import"./BaseCbacBanner-CMl-VU3K.js";import"./makeExternalStore-CrS-QWtj.js";import"./Tooltip-hRlt1KoC.js";import"./PopoverPopup-CjIG7Pek.js";import"./toNumber-CcKit7Y-.js";import"./useOsdkClient-BsIcKaUN.js";import"./tick-C7uyqAjE.js";import"./DropdownField-auraDr24.js";import"./withOsdkMetrics-B-ZB5Rqw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
