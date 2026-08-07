import{j as i}from"./iframe-DBzqrt56.js";import{O as p}from"./object-table-BJAjEQnJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DheEhBi0.js";import"./preload-helper-BYRdJxme.js";import"./Table-DdCg30xp.js";import"./index-CGTJucPn.js";import"./Dialog-CQLSDy00.js";import"./cross-Bba8yQHb.js";import"./svgIconContainer-BQ8ude0X.js";import"./useBaseUiId-dLakDqSs.js";import"./InternalBackdrop-DZDDKVf0.js";import"./composite-B6PaBa-a.js";import"./index-CZmKTtfj.js";import"./index-B9IR710C.js";import"./index-CLCfciEQ.js";import"./useEventCallback-kfKpJfFv.js";import"./SkeletonBar-BIr2SSBQ.js";import"./LoadingCell-BYP6w5MW.js";import"./ColumnConfigDialog-Du1mc6KP.js";import"./DraggableList-B8w2fATq.js";import"./search-B2tTqhzE.js";import"./Input-giB4RCDX.js";import"./useControlled-BPRbm5-q.js";import"./isEqual-B8geApbv.js";import"./isObject-DkG1sVMZ.js";import"./Button-j0UCjDkN.js";import"./ActionButton-Xkbg_ODc.js";import"./Checkbox-Dh0wNNyr.js";import"./useValueChanged-D9QIFmpB.js";import"./CollapsiblePanel-ciJZfod4.js";import"./MultiColumnSortDialog-BZQNUgbw.js";import"./MenuTrigger-BTARNaQ8.js";import"./CompositeItem-jEqhJqZm.js";import"./ToolbarRootContext-BOGYc2wJ.js";import"./getDisabledMountTransitionStyles-BRTFh2Nu.js";import"./getPseudoElementBounds-DVx9Tcx1.js";import"./chevron-down-DuPl72ud.js";import"./index-k77pMsqi.js";import"./error-BgfO_Kt-.js";import"./BaseCbacBanner-C7o_u6S3.js";import"./makeExternalStore-LjuA8zll.js";import"./Tooltip-CGIc4ORz.js";import"./PopoverPopup-fztzUF8H.js";import"./toNumber-saNM3qnm.js";import"./useOsdkClient-07aQwNTa.js";import"./tick-CxeZHEv3.js";import"./DropdownField-CQaYn6cM.js";import"./withOsdkMetrics-lVYMKJO7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
